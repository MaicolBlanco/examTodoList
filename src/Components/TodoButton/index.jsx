import React from "react";
import "./TodoButton.css";
import { TodoContext } from "../../TodoContext";

export function TodoButton() {
  const {openModal, setOpenModal} = React.useContext(TodoContext);

  return (
    <div className="continainer-button">
      <button
        className="todo-button"
        onClick={(event) => {
          // console.log(event.target);
          {setOpenModal(!openModal)}
          // () => {
          //   setOpenModal(state => !state);
          // }
        }}
      >
        +
      </button>
    </div>
  );
}
