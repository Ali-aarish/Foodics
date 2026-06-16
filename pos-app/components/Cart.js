// Cart — Demo
import React from "react";

export default function Cart({ items = [], total = 0 }) {
  // Render the current cart items and the running total
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>
      <strong>Total: ${total}</strong>
    </div>
  );
}
