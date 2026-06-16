// Cart page — Demo
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import Button from "../components/Button";

export default function Cart() {
  // Sample cart items with quantities (demo data).
  const [items, setItems] = useState([
    { id: 1, name: "Margherita Pizza", price: 35, qty: 2 },
    { id: 2, name: "Garlic Bread", price: 12, qty: 1 },
  ]);

  // Remove an item by id.
  const removeItem = (id) => setItems(items.filter((i) => i.id !== id));

  // Total = sum of price * qty across all lines.
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={removeItem} />
      ))}
      <p className="cart-total">Total: {total} SAR</p>
      <Button label="Proceed to Checkout" onClick={() => alert("Checkout!")} />
    </div>
  );
}
