import React, { useContext, useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

const TodoListContainer = (props) => {
  const { todos } = useContext(props.ChangeDataStatus);
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          ChangeDataStatus={props.ChangeDataStatus}
        />
      ))}
    </div>
  );
};

export default TodoListContainer;
