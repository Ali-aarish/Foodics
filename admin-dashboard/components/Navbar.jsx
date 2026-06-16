// Navbar — Demo
import React from "react";

// Top navigation bar with a title and the current user's name
export default function Navbar({ title = "Admin", user = "Guest" }) {
  return (
    <header className="navbar">
      <h1>{title}</h1>
      <span className="navbar-user">Hello, {user}</span>
    </header>
  );
}
