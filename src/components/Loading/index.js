import React from "react";
import { FaSpinner } from "react-icons/fa";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <FaSpinner size={33}></FaSpinner>
    </div>
  );
}
