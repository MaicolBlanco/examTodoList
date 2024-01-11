import React from "react";
import "./TodoButton.css";

function TodoButton() {
  return (
    <button
      className="todo-button"
      onClick={(event) => {
        console.log("Click");
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { TodoButton };
