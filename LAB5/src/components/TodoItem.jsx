const TodoItem = (props) => {
  const deleteToDo = () => {
    props.deleteToDo(props.todo.id);
  };

  const handleDoubleClick = () => {
    props.handleDoubleClick(props.todo.id);
  };

  return (
    <div
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
      onDoubleClick={handleDoubleClick}
    >
      {props.todo.title}
      <button onClick={deleteToDo} style={{ margin: "0px 20px" }}>
        xóa
      </button>
    </div>
  );
};

export default TodoItem;
