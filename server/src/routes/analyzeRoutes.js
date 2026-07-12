import express from "express";
import { analyzeCompany } from "../controllers/analyzeController.js";

const router = express.Router();

// POST /api/analyze
router.post("/", analyzeCompany);

export default router;