import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoutes from "./routes/analyzeRoutes.js";
import searchRoutes from "./routes/searchRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' 
      ? [
          process.env.FRONTEND_URL || 'https://investiq.vercel.app',
          /\.vercel\.app$/
        ]
      : ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST"],
    credentials: true
  })
);

app.use(express.json());

// Routes
app.use("/api/search", searchRoutes);
app.use("/api/analyze", analyzeRoutes);

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "InvestIQ API is running",
        version: "1.0.0",
        description: "AI-powered investment research platform"
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});