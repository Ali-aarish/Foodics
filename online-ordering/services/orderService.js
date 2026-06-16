// Order service — Demo
const BASE_URL = "http://localhost:5000/api";

// Fetch a single order by id.
export async function getOrder(id) {
  const res = await fetch(`${BASE_URL}/orders/${id}`);
  return res.json();
}

// Create a new online order.
export async function placeOrder(order) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...order, type: "online" }),
  });
  return res.json();
}

// Track the status of an order.
export async function trackOrder(id) {
  const res = await fetch(`${BASE_URL}/orders/${id}/track`);
  return res.json();
}
