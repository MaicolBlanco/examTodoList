import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";
import { Zpruebas } from "./testComponents/Zpruebas";
import Zcount from "./testComponents/Zcount";
import ZlistaDinamic from "./testComponents/ZlistaDinamic";
import ToggleComponent from "./testComponents/ToggleComponent";
import TestComponents from "./testComponents/TestComponents";

const defaultTodos = [
  { text: "Jugar con Estebitan", completed: true },
  { text: "Leer con Martin", completed: false },
  { text: "Lavar la losa", completed: true },
  { text: "Clean the house", completed: false },
];

export default function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => Boolean(todo.completed)).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = newTodos[todoIndex].completed
      ? false
      : true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };
  //console.log(React.useState());
  //console.log("searchValue: ", searchValue);

  return (
    <>
      <TestComponents />
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* <TodoList>
        <TodoItem />
      </TodoList> */}
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
      <Zpruebas names={"Martin y Esteban"} />
      <Zcount />
      <ZlistaDinamic />
      <ToggleComponent />
    </>
  );
}
