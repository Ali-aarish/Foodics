// Header — Demo
import React from "react";

export default function Header({ title }) {
  // Simple top header bar
  return (
    <header style={{ padding: 12, background: "#222", color: "#fff" }}>
      <h1>{title}</h1>
    </header>
  );
}
