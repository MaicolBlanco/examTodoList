import React from "react";
import "./TodoTitle.css";
import { TodoContext } from "../../TodoContext";

function TodoTitle() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return totalTodos === completedTodos ? (
    <h1 className="todo-counter">Has completado todas las Tareas</h1>
  ) : (
    <h1 className="todo-counter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOs
    </h1>
  );
}

export { TodoTitle };
