import React from "react";
import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
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
  );
}

export { TodoItem };
