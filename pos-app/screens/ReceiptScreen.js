// ReceiptScreen — Demo
import React from "react";

export default function ReceiptScreen({ order = { items: [], total: 0 } }) {
  // Render a simple printable receipt for a completed order
  return (
    <div style={{ fontFamily: "monospace", width: 220 }}>
      <h3 style={{ textAlign: "center" }}>Receipt</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {order.items.map((item, i) => (
          <li key={i}>
            {item.name} — ${item.price}
          </li>
        ))}
      </ul>
      <hr />
      <strong>Total: ${order.total}</strong>
    </div>
  );
}
