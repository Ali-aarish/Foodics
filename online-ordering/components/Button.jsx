// Button — Demo
import React from "react";

// Generic button. Renders children or a label, with onClick + disabled.
export default function Button({ children, label, onClick, disabled }) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {children || label}
    </button>
  );
}
