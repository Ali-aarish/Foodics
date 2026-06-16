// Payment service — Demo
const BASE_URL = "http://localhost:5000/api";

// Process a payment for an order.
export async function processPayment(payment) {
  const res = await fetch(`${BASE_URL}/payments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payment),
  });
  return res.json();
}
