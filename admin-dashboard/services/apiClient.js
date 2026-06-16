// API client — Demo
// A simple helper to talk to the Foodics backend.

const BASE_URL = "http://localhost:5000/api";

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${BASE_URL}/orders`);
  return res.json();
}
