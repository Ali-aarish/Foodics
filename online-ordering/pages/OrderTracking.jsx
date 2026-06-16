// OrderTracking page — Demo
import React, { useEffect, useState } from "react";
import { trackOrder } from "../services/orderService";

const STEPS = ["pending", "preparing", "out for delivery", "delivered"];

export default function OrderTracking() {
  const [status, setStatus] = useState("pending");

  // Fetch the current order status on mount (demo order id = 1).
  useEffect(() => {
    trackOrder(1).then((order) => setStatus(order.status));
  }, []);

  return (
    <div className="order-tracking">
      <h2>Order Status</h2>
      <ol>
        {STEPS.map((step) => (
          // Highlight the active step.
          <li key={step} className={step === status ? "active" : ""}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
