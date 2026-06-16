// CartItem — Demo
import React from "react";

// Renders one cart line. props: item, onRemove callback.
export default function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>x{item.qty}</span>
      <span>{item.price * item.qty} SAR</span>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}
