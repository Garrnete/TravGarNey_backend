import express from "express";
import Trip from "../models/Trip.js";

const router = express.Router();

// CREATE Trip
router.post("/", async (req, res) => {
  try {
    const { title, location, startDate, endDate, description, imageUrl } = req.body;

    if (!title || !location || !startDate || !endDate) {
      return res.status(400).json({ error: "Title, location, startDate, and endDate are required." });
    }

    const newTrip = new Trip({
      title,
      location,
      startDate,
      endDate,
      description,
      imageUrl,
    });

    const savedTrip = await newTrip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    console.error("Error creating trip:", err);
    res.status(500).json({ error: "Server error while creating trip." });
  }
});

// READ All Trips
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching trips." });
  }
});

// READ Single Trip
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: "Trip not found." });
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ error: "Error fetching trip." });
  }
});

// UPDATE Trip
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTrip) return res.status(404).json({ error: "Trip not found." });
    res.status(200).json(updatedTrip);
  } catch (err) {
    res.status(500).json({ error: "Error updating trip." });
  }
});

// DELETE Trip
router.delete("/:id", async (req, res) => {
  try {
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
    if (!deletedTrip) return res.status(404).json({ error: "Trip not found." });
    return res.status(200).json({ message: "Trip deleted successfully." });
  } catch (err) {
    console.error("Error deleting trip:", err);
    return res.status(500).json({ error: "Error deleting trip." });
  }
});

export default router;

