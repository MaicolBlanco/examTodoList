import React, { useState } from "react";
import { TodoTitle } from "./TodoTitle";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
import Tests from "./tests/Tests";

// const defaultTodos = [
//   { text: "Jugar con Estebitan", completed: true },
//   { text: "Leer con Martin", completed: false },
//   { text: "Lavar la loza", completed: true },
//   { text: "Clean the house", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");
let parsedTodos = !localStorage.getItem("TODOS_V1")
  ? []
  : JSON.parse(localStorage.getItem("TODOS_V1"));
const saveStorage = (newTodos) => {
  localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
};

export default function App() {
  const [todos, setTodos] = useState(parsedTodos);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => Boolean(todo.completed)).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    saveStorage(newTodos);
  };

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  //console.log(React.useState());
  //console.log("searchValue: ", searchValue);

  return (
    <div style={{ backgroundColor: "olive" }}>
      <Tests />
      <TodoTitle total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <TodoButton />
    </div>
  );
}
