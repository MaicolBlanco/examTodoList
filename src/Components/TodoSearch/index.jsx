import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    // console.log(event);
    // console.log(event.target);
    //console.log("event.target.value: ", event.target.value);
  };

  return (
    <div className="todo-search-container">
      <input
        className="todo-search-input"
        placeholder="Ingresar Tarea"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}

export { TodoSearch };
