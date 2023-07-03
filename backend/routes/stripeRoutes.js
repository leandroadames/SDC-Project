import express from "express";
import { createPaymentSession } from "../controllers/stripeController.js";

const router = express.Router();

router.post("/", createPaymentSession);

export default router;
