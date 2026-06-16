// Analytics page — Demo
import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";
import { getAnalytics } from "../services/analyticsService";

export default function Analytics() {
  const [data, setData] = useState({ totalSales: 0, totalOrders: 0, salesByDay: [] });
  useEffect(() => { getAnalytics().then(setData); }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p>{data.totalSales} SAR</p>
        </div>
        <div className="stat-card">
          <h3>Total Orders</h3>
          <p>{data.totalOrders}</p>
        </div>
      </div>
      <Chart data={data.salesByDay} />
    </div>
  );
}
