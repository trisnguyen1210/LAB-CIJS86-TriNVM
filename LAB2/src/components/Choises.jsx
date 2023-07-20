import toDolist from "../data/todolist";
import { updateChecked } from "./TaskLeft";

function Choises() {
  return (
    <div className="has-search">
      <ul>
        {toDolist.map((choice, index) => (
          <li key={index}>
            <label className="checkbox-container">
              {choice}
              <input
                id={`task${index + 1}`}
                type="checkbox"
                className="checkbox"
                onChange={updateChecked}
              />
              <span className="checkmark"></span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Choises;
