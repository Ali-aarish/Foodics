// Auth service — Demo
const BASE_URL = "http://localhost:5000/api";

export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

export async function logout() {
  const res = await fetch(`${BASE_URL}/auth/logout`, { method: "POST" });
  return res.json();
}
