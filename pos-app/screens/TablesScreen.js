// TablesScreen — Demo
import React, { useState } from "react";

export default function TablesScreen() {
  // Local sample tables with their current status
  const [tables, setTables] = useState([
    { id: 1, name: "T1", status: "free" },
    { id: 2, name: "T2", status: "occupied" },
    { id: 3, name: "T3", status: "free" },
    { id: 4, name: "T4", status: "occupied" },
  ]);

  // Toggle a table between free and occupied
  const toggle = (id) =>
    setTables(tables.map((t) =>
      t.id === id ? { ...t, status: t.status === "free" ? "occupied" : "free" } : t
    ));

  return (
    <div>
      <h2>Tables</h2>
      <div style={{ display: "flex", gap: 8 }}>
        {tables.map((t) => (
          <button key={t.id} onClick={() => toggle(t.id)}>
            {t.name} — {t.status}
          </button>
        ))}
      </div>
    </div>
  );
}
