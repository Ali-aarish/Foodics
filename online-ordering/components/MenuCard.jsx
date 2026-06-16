// MenuCard — Demo
import React from "react";
import Button from "./Button";

// Renders a single menu item card. props: item, onAdd callback.
export default function MenuCard({ item, onAdd }) {
  return (
    <div className="menu-card">
      <h3>{item.name}</h3>
      <p className="category">{item.category}</p>
      <p className="price">{item.price} SAR</p>
      <Button label="Add to Cart" onClick={() => onAdd(item)} />
    </div>
  );
}
