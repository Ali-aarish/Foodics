// Keypad — Demo
import React from "react";

export default function Keypad({ onKeyPress }) {
  // Numeric keys 0-9
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
      {keys.map((k) => (
        <button key={k} onClick={() => onKeyPress(k)}>
          {k}
        </button>
      ))}
    </div>
  );
}
