import React from "react";
import "./TodoTitle.css";

function TodoTitle({ total, completed }) {
  return total === completed ? (
    <h1 className="todo-counter">Has completado todas las Tareas</h1>
  ) : (
    <h1 className="todo-counter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoTitle };
