import { useEffect, useState } from "react";
import Todoinput from "./components/Todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }
  function handleAddTodolist(newTodo) {
    let newTodolist = [...todos, newTodo];
    persistData(newTodolist);
    setTodos(newTodolist);
  }
  function handleDeletetodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueTobeEdited = todos[index];
    setTodoValue(valueTobeEdited);
    handleDeletetodo(index);
  }
  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todos");
    if (localTodos) {
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    } else {
      return;
    }
  }, []);

  return (
    <>
      <Todoinput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodolist={handleAddTodolist}
      />
      <TodoList
        handleDeletetodo={handleDeletetodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
