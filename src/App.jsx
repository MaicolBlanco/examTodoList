import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { TodoButton } from "./TodoButton";

const defaultTodos = [
  {text: 'Jugar con Estebitan', completed: true},
  {text: 'Leer con Martin', completed: false},
  {text: 'Lavar la losa', completed: true},
  {text: 'Clean the house', completed: false},
];

export default function App() {
  return (
    <>
      <TodoCounter total={5} completed={3}/>
      <TodoSearch />
      {/* <TodoList>
        <TodoItem />
      </TodoList> */}
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoButton/>
    </>
  );
}
