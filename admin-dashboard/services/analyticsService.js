// Analytics service — Demo
const BASE_URL = "http://localhost:5000/api";

export async function getAnalytics() {
  const res = await fetch(`${BASE_URL}/analytics`);
  return res.json();
}
