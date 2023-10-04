import React, { ReactNode } from "react";
import "./Info.module.scss";

export default function Info({ label, children, type }) {
  return (
    <div className={"container"}>
      {label && <div>{label}</div>}
      <div className={"error_Parent"}>
        <span style={{ color: type === "successed" ? "green" : "tomato" }}>
          {children}
        </span>
      </div>
    </div>
  );
}
