import mongoose from "mongoose";

const journalEntrySchema = new mongoose.Schema({
    tripId: { type: mongoose.Schema.Types.ObjectId, ref: "Trip", required: true },
    title: { type: String, required: true },
    content: String,
    photo: String,
    date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("JournalEntry", journalEntrySchema);
