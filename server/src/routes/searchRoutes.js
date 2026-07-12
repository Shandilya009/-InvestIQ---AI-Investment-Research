import express from "express";
import { searchCompany } from "../controllers/searchController.js";

const router = express.Router();

router.get("/", searchCompany);

export default router;