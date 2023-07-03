import stripe from "stripe";
import dotenv from "dotenv";
import { sql } from "../server.js";

dotenv.config({ path: "../../.env" });

// Give strip the stripe secret key

// Create Items Map for stripe
const subscriptionPlans = new Map([
  [1, { price: process.env.PRICE_ID_MOBILE }],
  [2, { price: process.env.PRICE_ID_BASIC }],
  [3, { price: process.env.PRICE_ID_STANDARD }],
  [4, { price: process.env.PRICE_ID_PREMIUM }],
]);

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  // console.log("HELLO FROM SESSION");
  const lineItems = req.body.items.map((item) => {
    //   // Grab plan from subscriptionPlans map
    const subscriptionPlan = subscriptionPlans.get(item.id);
    //   // Format for stripe items
    return {
      price: subscriptionPlan.price,
      quantity: Number(item.quantity),
    };
  });

  console.log(lineItems);
  // Create session
  const session = await stripeInstance.checkout.sessions.create({
    // Payment method types
    payment_method_types: ["card"],
    // Line items
    line_items: lineItems,
    // Subscription mode
    mode: "subscription",
    // Success and cancel urls
    success_url: `${process.env.SUCCESS_URL}`,
    cancel_url: `${process.env.CANCEL_URL}`,
  });
  return session;
};

export default createCheckoutSession;
