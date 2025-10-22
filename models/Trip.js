import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    description: { type: String },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Trip", tripSchema);

