import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css"

export function Modal({ children }) {
  return createPortal(
    <div className="Modal-container">{children}</div>,
    document.getElementById("modal")
  );
}
