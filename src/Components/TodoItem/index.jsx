import React from "react";
import "./TodoItem.css";
import { CompleteIcon } from "./components/CompleteIcon";
import { DeleteIcon } from "./components/DeleteIcon";

function TodoItem(props) {
  return (
    <div className="todo-item-container">
      <li className="todo-item">
        <p
          className={`icon-check ${props.completed ? "icon-check-active" : ""}`}
          onClick={props.onComplete}
        >
          <CompleteIcon completed={props.completed} />
        </p>
        <span
          className={`todo-item-text ${
            props.completed && "todo-item-text-completed"
          }`}
        >
          {props.text}
        </span>
        <p className="icon-delete" onClick={props.onDelete}>
          <DeleteIcon />
        </p>
      </li>
    </div>
  );
}

export { TodoItem };
