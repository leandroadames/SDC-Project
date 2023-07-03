import axios from "axios";

export async function handleStripePayment(selectedPlan, e) {
  try {
    e.preventDefault();
    console.log(selectedPlan);
    console.log("hello");
    const items = [{ id: selectedPlan, quantity: 1 }];

    console.log(items);

    const response = await axios.post("/api/stripe/charge", {
      items,
    });

    console.log(response.data);

    const url = response.data.url;
    console.log(url);
    window.location = url;
  } catch (e) {
    console.log(e);
  }
}
