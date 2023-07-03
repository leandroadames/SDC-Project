import express from "express";
import { getMovies } from "../controllers/movieController.js";

const router = express.Router();

// Routes to get all movies
router.get("/", getMovies);


export default router;
