// API client — Demo
// A simple helper to talk to the Foodics backend.

const BASE_URL = "http://localhost:5000/api";

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  return res.json();
}

export async function placeOrder(order) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...order, type: "online" }),
  });
  return res.json();
}
