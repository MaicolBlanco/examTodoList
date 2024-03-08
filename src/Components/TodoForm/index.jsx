import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../../TodoContext";

function TodoForm() {
  const { setOpenModal, addTodo } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const isValid = (newTodoValue.length >= 2) ? true : false;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(!isValid) return; 
    addTodo(newTodoValue.trim());
    setOpenModal(false);
  };
  // const handleOnSubmit = (event) => {
  //   event.preventDefault();
  //   addTodo(newTodoValue);
  //   setOpenModal(false);
  // };

  const onCancel = () => {
    setOpenModal(false);
  };

  const handleOnChange = (event) =>{
    setNewTodoValue(event.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={handleOnSubmit}>
      <label htmlFor="todoInput">Ingresa tu nuevo TODO</label>
      <textarea
        id="todoInput"
        className="TodoForm-input"
        placeholder="Martin Esteban...."
        value={newTodoValue}
        onChange={handleOnChange}
        // required
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm-button TodoForm-button--add" type="submit">
          Agregar
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
