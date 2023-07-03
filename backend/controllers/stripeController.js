import createCheckoutSession from "../utils/stripe.js";

export const createPaymentSession = async (req, res) => {
  try {
    const session = await createCheckoutSession(req);

    console.log(session);

    res.status(201).json({ url: session.url });
  } catch (err) {
    console.log(err);
  }
};
