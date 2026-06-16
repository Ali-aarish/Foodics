// Button — Demo
import React from "react";

export default function Button({ label, children, onClick, disabled }) {
  // Generic reusable button; uses label prop or children as content
  return (
    <button onClick={onClick} disabled={disabled}>
      {label || children}
    </button>
  );
}
