import express from "express";
import Trip from "../models/Trip.js";
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const trip = new Trip(req.body);
    const savedTrip = await trip.save();
    res.status(201).json(savedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all
router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    res.json(trip);
  } catch (err) {
    res.status(404).json({ message: "Trip not found" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTrip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.json({ message: "Trip deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
