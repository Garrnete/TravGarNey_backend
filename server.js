import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tripRoutes from "./routes/tripRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

// Setups
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/trips", tripRoutes);
app.use("/api/journals", journalRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.error("MongoDB Connection Error:", err));

app.use("/api/trips", tripRoutes);
app.use("/api/journals", journalRoutes);

app.use(notFound);
app.use(errorHandler);

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`));


