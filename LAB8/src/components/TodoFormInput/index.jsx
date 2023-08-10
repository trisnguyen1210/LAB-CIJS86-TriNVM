import { useContext, useState } from "react";
import './style.css'

const TodoFormInput = (props) => {
  const { onAddTodo } = useContext(props.ChangeDataStatus);
  const [isValidChar, setIsValidChar] = useState(true);
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.value.includes("@")) {
      setIsValidChar(false);
    } else {
      setValue(e.target.value);
    }
  };

  const onClickAddButton = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      isCompleted: false,
    };
    console.log("newTodo", newTodo);

    onAddTodo(newTodo);
    setValue("");
  };

  return (
    <div className="FormInput">
      <input
        type="text"
        placeholder="Enter your task"
        onChange={onChangeHandler}
        value={value}
      />
      {isValidChar === true ? null : "Invalid charcted"}
      <button onClick={onClickAddButton}>Add</button>
    </div>
  );
};

export default TodoFormInput;
