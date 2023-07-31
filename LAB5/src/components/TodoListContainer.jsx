import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
  const deleteToDo = (id) => {
    const updateToDo = props.todos.filter((item) => item.id !== id);
    props.setTodos([...updateToDo]);
  };
  
  const handleDoubleClick = (id) => {
    const todoIndex = props.todos.findIndex((item) => item.id === id);
    if (todoIndex !== -1) {
      const infoTodoIndex = props.todos[todoIndex];
      infoTodoIndex.isCompleted === true
        ? (infoTodoIndex.isCompleted = false)
        : (infoTodoIndex.isCompleted = true);
      props.setTodos([...props.todos]);
    }
    // props.setTodos([...props.todos]);
  };

  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          todo={todo}
          todos={props.todos}
          setTodos={props.setTodos}
          handleDoubleClick={handleDoubleClick}
          deleteToDo={deleteToDo}
        />
      ))}

      {/* <button onClick={onCLickAddTodo}>add</button> */}
    </div>
  );
};

export default TodoListContainer;
