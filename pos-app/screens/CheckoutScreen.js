// CheckoutScreen — Demo
import React, { useState } from "react";
import { processPayment } from "../services/paymentService";

export default function CheckoutScreen({ order = { items: [], total: 42 } }) {
  const [paid, setPaid] = useState(false);

  // Send the payment for the current order to the service
  const pay = async () => {
    await processPayment({ amount: order.total });
    setPaid(true);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${order.total}</p>
      {paid ? (
        <p>Payment complete!</p>
      ) : (
        <button onClick={pay}>Pay</button>
      )}
    </div>
  );
}
