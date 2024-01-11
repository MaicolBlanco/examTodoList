import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <p className={`icon-check ${props.completed && "icon-check-active"}`}>
        V
      </p>
      <span
        className={`todo-item-text ${
          props.completed && "todo-item-text-completed"
        }`}
      >
        {props.text}
      </span>
      <p className="icon-delete">X</p>
    </li>
  );
}

export { TodoItem };
