import express from "express";
import {
  addUserProfile,
  getUsersProfiles,
} from "../controllers/userProfileController.js";
const router = express.Router();

router.post("/", addUserProfile).get("/", getUsersProfiles);

export default router;
