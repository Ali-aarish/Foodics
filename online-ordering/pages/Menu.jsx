// Menu page — Demo
// Customers browse the menu and add items to their cart.

import React, { useEffect, useState } from "react";
import { getMenu, placeOrder } from "../services/apiClient";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  const addToCart = (item) => setCart([...cart, item]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const checkout = async () => {
    const order = await placeOrder({ items: cart, total });
    alert(`Thanks! Your order #${order.id} is being prepared.`);
    setCart([]);
  };

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="menu-list">
        {menu.map((item) => (
          <div key={item.id} className="menu-card">
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p>{item.price} SAR</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart">
        <h2>Cart: {cart.length} items — {total} SAR</h2>
        <button onClick={checkout} disabled={cart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
}
