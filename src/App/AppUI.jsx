import {
  TodoTitle,
  TodoSearch,
  TodoList,
  TodoItem,
  TodoButton,
  TodosLoading,
  TodosError,
  EmptyTodos,
} from "../Components";
import { TodoContext } from "../TodoContext";
import Tests from "../Tests/Tests";

function AppUI() {
  return (
    <div style={{ backgroundColor: "olive" }}>
      <Tests />
      <TodoTitle />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
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
        )}
      </TodoContext.Consumer>
      <TodoButton />
    </div>
  );
}

export { AppUI };
