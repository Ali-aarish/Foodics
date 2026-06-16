// Sidebar — Demo
import React from "react";

const links = [
  "Dashboard",
  "Menu",
  "Analytics",
  "Customers",
  "Branches",
  "Staff",
  "Inventory",
];

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {links.map((name) => (
          <li key={name}>
            <a href={`/${name.toLowerCase()}`}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
