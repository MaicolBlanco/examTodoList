import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

export default function App() {
  // const [todos, setTodos] = useState(defaultTodos);
  //console.log(React.useState());
  //console.log("searchValue: ", searchValue);

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}
