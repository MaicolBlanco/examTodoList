import React from "react";
import { FaRegSquare, FaRegSquareCheck } from "react-icons/fa6";

function CompleteIcon(props) {
  return props.completed ? <FaRegSquareCheck /> : <FaRegSquare />;
}

export { CompleteIcon };
