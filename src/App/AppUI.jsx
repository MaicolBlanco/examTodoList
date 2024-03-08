import React from 'react';
import {
  TodoTitle,
  TodoSearch,
  TodoList,
  TodoItem,
  TodoButton,
  TodosLoading,
  TodosError,
  EmptyTodos,
  Modal,
  TodoForm,
} from "../Components";
import { TodoContext } from "../TodoContext";
import Tests from "../Tests/Tests";

function AppUI() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal } =
    React.useContext(TodoContext);

  return (
    <div style={{ backgroundColor: "olive", minHeight:"800px"}}>
      <Tests />
      <TodoTitle />
      <TodoSearch />
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}

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
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
