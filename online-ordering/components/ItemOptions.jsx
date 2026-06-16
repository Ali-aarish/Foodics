// ItemOptions — Demo
import React from "react";

// Renders selectable options (e.g. size / extras) for a menu item.
// props: options (array of strings), onSelect (callback).
export default function ItemOptions({ options, onSelect }) {
  return (
    <div className="item-options">
      {options.map((option) => (
        <button key={option} onClick={() => onSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}
