import React from "react";
import "./Modal.styles.scss";
import { FaClosedCaptioning } from "react-icons/fa";
import { BiXCircle } from "react-icons/bi";

function ModalComponent({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children}
        <BiXCircle
          className="close-button"
          size={33}
          onClick={onClose}></BiXCircle>
      </div>
    </div>
  );
}

export default ModalComponent;
