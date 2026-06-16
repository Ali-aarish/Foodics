// Menu service — Demo
const BASE_URL = "http://localhost:5000/api";

export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menu`);
  return res.json();
}

export async function addMenuItem(item) {
  const res = await fetch(`${BASE_URL}/menu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  });
  return res.json();
}

export async function deleteMenuItem(id) {
  const res = await fetch(`${BASE_URL}/menu/${id}`, { method: "DELETE" });
  return res.json();
}
