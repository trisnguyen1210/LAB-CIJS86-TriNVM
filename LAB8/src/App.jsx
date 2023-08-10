import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoFormInput from "./components/TodoFormInput";
import TodoHeader from "./components/TodoHeader";
import TodoListContainer from "./components/TodoListContainer";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Todo 2",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Todo 3",
      isCompleted: false,
    },
  ]);

  const ChangeDataStatus = createContext();

  const onAddTodo = (newTodo) => {
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const deleteToDo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos([...newTodos]);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleDoubleClick = (id) => {
    const todoIndex = todos.findIndex((item) => item.id === id);
    if (todoIndex !== -1) {
      const infoTodoIndex = todos[todoIndex];
      infoTodoIndex.isCompleted === true
        ? (infoTodoIndex.isCompleted = false)
        : (infoTodoIndex.isCompleted = true);
      const newTodos = [...todos];
      setTodos([...newTodos]);
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  return (
    <div className="background">
      <TodoHeader />
      <ChangeDataStatus.Provider
        value={{ onAddTodo, deleteToDo, handleDoubleClick, todos, setTodos }}
      >
        <TodoFormInput ChangeDataStatus={ChangeDataStatus} />
        <TodoListContainer ChangeDataStatus={ChangeDataStatus} />
      </ChangeDataStatus.Provider>
      <TodoFooter />
    </div>
  );
}

export default App;
