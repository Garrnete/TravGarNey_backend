import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    budget: Number,
    notes: String,
    coverImage: String, // optional
}, { timestamps: true });

export default mongoose.model("Trip", tripSchema);
