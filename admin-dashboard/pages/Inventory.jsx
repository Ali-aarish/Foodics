// Inventory page — Demo
import React, { useEffect, useState } from "react";
import { getInventory } from "../services/inventoryService";

const LOW_STOCK = 10; // threshold for highlighting low stock

export default function Inventory() {
  const [items, setItems] = useState([]);
  useEffect(() => { getInventory().then(setItems); }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <table className="data-table">
        <thead>
          <tr><th>Name</th><th>Quantity</th><th>Unit</th></tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            // Highlight rows that are running low on stock
            <tr key={item.id || i} style={item.quantity < LOW_STOCK ? { background: "#ffe0e0" } : {}}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
