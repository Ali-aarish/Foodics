// Branches page — Demo
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

const BASE_URL = "http://localhost:5000/api";
const columns = [
  { key: "name", label: "Name" },
  { key: "city", label: "City" },
  { key: "address", label: "Address" },
];

export default function Branches() {
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/branches`).then((r) => r.json()).then(setBranches);
  }, []);

  return (
    <div>
      <h2>Branches</h2>
      <DataTable columns={columns} rows={branches} />
    </div>
  );
}
