// Header — Demo
import React from "react";

// Site header / nav bar. Title is passed via props.
export default function Header({ title }) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      <nav>
        <a href="/menu">Menu</a>
        <a href="/cart">Cart</a>
        <a href="/account">Account</a>
      </nav>
    </header>
  );
}
