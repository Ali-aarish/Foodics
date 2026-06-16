// PaymentScreen — Demo
import React, { useState } from "react";
import { processPayment } from "../services/paymentService";

export default function PaymentScreen() {
  const [method, setMethod] = useState("cash");
  const [amount, setAmount] = useState("");

  // Process the chosen payment method and amount
  const submit = async () => {
    await processPayment({ method, amount: Number(amount) });
    alert("Payment processed");
  };

  return (
    <div>
      <h2>Payment</h2>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="cash">Cash</option>
        <option value="card">Card</option>
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={submit}>Process</button>
    </div>
  );
}
