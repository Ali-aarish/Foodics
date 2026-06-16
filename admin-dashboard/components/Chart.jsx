// Chart — Demo
import React from "react";

// Simple bar chart: data = [{label,value}]. Bars are inline-styled divs,
// each width scaled relative to the largest value (no chart library).
export default function Chart({ data = [] }) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div className="chart">
      {data.map((d) => (
        <div key={d.label} className="chart-row">
          <span className="chart-label">{d.label}</span>
          <div
            className="chart-bar"
            style={{ width: `${(d.value / max) * 100}%`, height: "16px", background: "#4caf50" }}
          />
          <span className="chart-value">{d.value}</span>
        </div>
      ))}
    </div>
  );
}
