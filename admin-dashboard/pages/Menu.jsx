// Menu page — Demo
import React, { useEffect, useState } from "react";
import DataTable from "../components/DataTable";
import { getMenu, addMenuItem } from "../services/menuService";

const columns = [
  { key: "name", label: "Name" },
  { key: "price", label: "Price" },
];

export default function Menu() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => { getMenu().then(setItems); }, []);

  // Add a new item then refresh the list
  const handleAdd = async (e) => {
    e.preventDefault();
    await addMenuItem({ name, price: Number(price) });
    setItems(await getMenu());
    setName(""); setPrice("");
  };

  // Format prices as "{x} SAR" for display
  const rows = items.map((i) => ({ ...i, price: `${i.price} SAR` }));

  return (
    <div>
      <h2>Menu</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button type="submit">Add Item</button>
      </form>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}
