import {
  TodoTitle,
  TodoSearch,
  TodoList,
  TodoItem,
  TodoButton,
} from "../Components";
import Tests from "../Tests/Tests";

function AppUI({
  loading,
  error,
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}) {
  return (
    <div style={{ backgroundColor: "olive" }}>
      <Tests />
      <TodoTitle total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Error!!</p>}
        {(!loading && searchedTodos.length === 0) && <p>¡Crea un TODO!</p>}

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

export { AppUI };
