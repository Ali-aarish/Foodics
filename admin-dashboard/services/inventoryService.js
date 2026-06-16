// Inventory service — Demo
const BASE_URL = "http://localhost:5000/api";

export async function getInventory() {
  const res = await fetch(`${BASE_URL}/inventory`);
  return res.json();
}

export async function updateStock(id, quantity) {
  const res = await fetch(`${BASE_URL}/inventory/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
  return res.json();
}
