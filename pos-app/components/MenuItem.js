// MenuItem — Demo
import React from "react";

export default function MenuItem({ item, onAdd }) {
  // One menu item card with an Add button
  return (
    <div style={{ border: "1px solid #ccc", padding: 8, borderRadius: 4 }}>
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => onAdd(item)}>Add</button>
    </div>
  );
}
