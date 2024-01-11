import React from "react";
import "./TodoSearch.css";

function TodoSearch() {
  return (
    <div className="todo-search-container">
      <input
        className="todo-search-input"
        placeholder="Ingresar Tarea"
        onChange={(event) => {
          // console.log(event);
          // console.log(event.target);
          console.log('event.target.value :>> ', event.target.value);
        }}
      />
    </div>
  );
}

export { TodoSearch };
