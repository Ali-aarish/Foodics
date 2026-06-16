// Customers page — Demo
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

const BASE_URL = "http://localhost:5000/api";
const columns = [
  { key: "name", label: "Name" },
  { key: "phone", label: "Phone" },
  { key: "points", label: "Points" },
];

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  // Fetch loyalty customers from the API
  useEffect(() => {
    fetch(`${BASE_URL}/customers`).then((r) => r.json()).then(setCustomers);
  }, []);

  return (
    <div>
      <h2>Loyalty Customers</h2>
      <DataTable columns={columns} rows={customers} />
    </div>
  );
}
