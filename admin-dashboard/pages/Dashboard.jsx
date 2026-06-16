// Dashboard page — Demo
// Shows simple business stats for owners/managers.

import React, { useEffect, useState } from "react";
import { getOrders, getMenu } from "../services/apiClient";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getOrders().then(setOrders);
    getMenu().then(setMenu);
  }, []);

  const totalSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);

  return (
    <div>
      <h1>Dashboard 📊</h1>

      <div className="stats">
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{orders.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>{totalSales} SAR</p>
        </div>
        <div className="stat-card">
          <h3>Menu Items</h3>
          <p>{menu.length}</p>
        </div>
      </div>
    </div>
  );
}
