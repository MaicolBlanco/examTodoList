import React from "react";
import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return total === completed ? (
    <h1 className="todo-counter">Has completado todas las Tareas</h1>
  ) : (
    <h1 className="todo-counter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
