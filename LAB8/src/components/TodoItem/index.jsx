import { useContext } from "react";
import "./style.css";
const TodoItem = (props) => {
  const { deleteToDo, handleDoubleClick } = useContext(props.ChangeDataStatus);

  const btnDeleteToDo = () => {
    deleteToDo(props.todo.id);
  };

  const btnHandleDoubleClick = () => {
    handleDoubleClick(props.todo.id);
  };

  return (
    <div className="TodoList_item">
      <p
        style={{
          textDecoration: props.todo.isCompleted ? "line-through" : "none",
        }}
        onDoubleClick={btnHandleDoubleClick}
      >
        {props.todo.title}
      </p>
      <button
        onClick={btnDeleteToDo}
        style={{
          backgroundColor: props.todo.isCompleted ? "#9ED2BE" : "#F8DE22",
        }}
      >
        xóa
      </button>
    </div>
  );
};

export default TodoItem;
