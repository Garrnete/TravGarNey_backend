import express from "express";
import JournalEntry from "../models/JournalEntry.js";
const router = express.Router();

// Create
router.post("/", async (req, res) => {
  try {
    const entry = new JournalEntry(req.body);
    const savedEntry = await entry.save();
    res.status(201).json(savedEntry);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Read all (optionally filter by tripId)
router.get("/", async (req, res) => {
  try {
    const { tripId } = req.query;
    const entries = tripId ? await JournalEntry.find({ tripId }) : await JournalEntry.find();
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Read one
router.get("/:id", async (req, res) => {
  try {
    const entry = await JournalEntry.findById(req.params.id);
    res.json(entry);
  } catch (err) {
    res.status(404).json({ message: "Entry not found" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const updated = await JournalEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await JournalEntry.findByIdAndDelete(req.params.id);
    res.json({ message: "Journal entry deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
