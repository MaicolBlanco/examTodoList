import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

export default function App(){
  return(
    <>
      <TodoCounter/>
      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      
      <CreateTodoButton/>
    </>
  )
}

function TodoItem() {
  return(
    <ul>
      <li>
        <p>V</p>
        <span>Pruebas de TodoList</span>
        <p>X</p>
      </li>
    </ul>
  );
}