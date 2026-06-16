// OrderScreen — Demo
// Shows the menu and lets staff add items to an order.

import React, { useEffect, useState } from "react";
import { getMenu, createOrder } from "../services/apiClient";

export default function OrderScreen() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);

  // Load the menu when the screen opens
  useEffect(() => {
    getMenu().then(setMenu);
  }, []);

  const addToCart = (item) => setCart([...cart, item]);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
    const order = { items: cart, total, type: "pos" };
    const result = await createOrder(order);
    alert(`Order #${result.id} placed! Total: ${total}`);
    setCart([]);
  };

  return (
    <div>
      <h1>New Order</h1>

      <h2>Menu</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} — {item.price}
            <button onClick={() => addToCart(item)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Cart ({cart.length} items)</h2>
      <p>Total: {total}</p>
      <button onClick={placeOrder} disabled={cart.length === 0}>
        Place Order
      </button>
    </div>
  );
}
