// Checkout page — Demo
import React, { useState } from "react";
import { placeOrder } from "../services/orderService";
import { processPayment } from "../services/paymentService";
import Button from "../components/Button";

export default function Checkout() {
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("cash");

  // Place the order, then process payment (demo flow).
  const handlePlaceOrder = async () => {
    const order = await placeOrder({ address, payment });
    await processPayment({ orderId: order.id, method: payment });
    alert("Order placed!");
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <input
        placeholder="Delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <select value={payment} onChange={(e) => setPayment(e.target.value)}>
        <option value="cash">Cash on Delivery</option>
        <option value="card">Credit Card</option>
      </select>
      <Button label="Place Order" onClick={handlePlaceOrder} />
    </div>
  );
}
