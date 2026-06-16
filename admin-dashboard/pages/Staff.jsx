// Staff page — Demo
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";

const BASE_URL = "http://localhost:5000/api";
const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  { key: "email", label: "Email" },
];

export default function Staff() {
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}/staff`).then((r) => r.json()).then(setStaff);
  }, []);

  return (
    <div>
      <h2>Staff</h2>
      <DataTable columns={columns} rows={staff} />
    </div>
  );
}
