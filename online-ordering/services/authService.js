// Auth service — Demo
const BASE_URL = "http://localhost:5000/api";

// Log in with credentials (email + password).
export async function login(credentials) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

// Register a new user.
export async function register(user) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

// Fetch the current user's profile.
export async function getProfile() {
  const res = await fetch(`${BASE_URL}/auth/profile`);
  return res.json();
}
