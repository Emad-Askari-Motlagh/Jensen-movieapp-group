import React from "react";
import "./Button.styles.scss";

export default function Button({ logo, title, onClick }) {
  return (
    <div onClick={onClick} className="button-wrapper">
      {logo}
      <span>{title}</span>
    </div>
  );
}
