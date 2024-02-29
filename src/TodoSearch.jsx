import React from "react";
import "./TodoSearch.css";

function TodoSearch({ searchValue, setSearchValue }) {
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
