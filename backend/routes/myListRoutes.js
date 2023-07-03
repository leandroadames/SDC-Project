import express from "express";
import {
  getMyList,
  addToList,
  removeFromList,
} from "../controllers/myListController.js";

const router = express.Router();

router.get("/", getMyList).post("/", addToList).delete("/:id", removeFromList);

export default router;
