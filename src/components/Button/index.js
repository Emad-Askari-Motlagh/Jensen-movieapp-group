import React from "react";

export default function Button({ logo, title }) {
  return (
    <div>
      <span>{logo}</span>
      <span>{title}</span>
    </div>
  );
}
