import express from "express";
import Journal from "../models/Journal.js";

const router = express.Router();

// CREATE Journal
router.post("/", async (req, res) => {
  try {
    const { title, content, date } = req.body;

    if (!title || !content || !date) {
      return res
        .status(400)
        .json({ error: "Title, content, and date are required." });
    }

    const newJournal = new Journal({ title, content, date });
    const savedJournal = await newJournal.save();
    res.status(201).json(savedJournal);
  } catch (err) {
    console.error("Error creating journal:", err);
    res.status(500).json({ error: "Server error while creating journal." });
  }
});

// READ All Journals
router.get("/", async (req, res) => {
  try {
    const journals = await Journal.find().sort({ createdAt: -1 });
    res.status(200).json(journals);
  } catch (err) {
    res.status(500).json({ error: "Server error fetching journals." });
  }
});

// READ Single Journal
router.get("/:id", async (req, res) => {
  try {
    const journal = await Journal.findById(req.params.id);
    if (!journal) return res.status(404).json({ error: "Journal not found." });
    res.status(200).json(journal);
  } catch (err) {
    res.status(500).json({ error: "Error fetching journal." });
  }
});

// UPDATE Journal
router.put("/:id", async (req, res) => {
  try {
    const updatedJournal = await Journal.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedJournal)
      return res.status(404).json({ error: "Journal not found." });
    res.status(200).json(updatedJournal);
  } catch (err) {
    res.status(500).json({ error: "Error updating journal." });
  }
});

// DELETE Journal
router.delete("/:id", async (req, res) => {
  try {
    const deletedJournal = await Journal.findByIdAndDelete(req.params.id);
    if (!deletedJournal)
      return res.status(404).json({ error: "Journal not found." });
    res.status(200).json({ message: "Journal deleted successfully." });
  } catch (err) {
    res.status(500).json({ error: "Error deleting journal." });
  }
});

export default router;

