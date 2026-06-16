// Account page — Demo
import React, { useState } from "react";

export default function Account() {
  // Sample customer profile (demo data).
  const [profile] = useState({
    name: "Sara Ahmed",
    email: "sara@example.com",
    phone: "+966 50 123 4567",
    loyaltyPoints: 320,
  });

  return (
    <div className="account">
      <h2>My Account</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Phone: {profile.phone}</p>
      <p>Loyalty Points: {profile.loyaltyPoints}</p>
    </div>
  );
}
