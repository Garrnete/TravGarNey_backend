import express from "express";
import Trip from "../models/Trip.js";

const router = express.Router();

// CREATE Trip
router.post("/", async (req, res) => {
  try {
    const { destination, startDate, endDate, budget, notes, coverImage } = req.body;

    // Validation
    if (!destination || !startDate || !endDate) {
      return res.status(400).json({ error: "Destination, startDate, and endDate are required." });
    }

    const newTrip = new Trip({
      destination,
      startDate,
      endDate,
      budget,
      notes,
      coverImage,
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
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching trips." });
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
    res.status(200).json({ message: "Trip deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting trip." });
  }
});

export default router;
