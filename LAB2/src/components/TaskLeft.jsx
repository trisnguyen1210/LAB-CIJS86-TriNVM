import toDolist from "../data/todolist";

function TaskLeft() {
  return (
    <div id="taskleft" className="special-text">
      {toDolist.length - localStorage.length} task left!
    </div>
  );
}

export function updateChecked() {
  const checkboxs = document.querySelectorAll(".checkbox");
  let checkedCount = 0;

  checkboxs.forEach((checkbox, index) => {
    if (checkbox.checked) {
      checkedCount++;
      localStorage.setItem(`task${index + 1}`, "true");
    } else {
      localStorage.removeItem(`task${index + 1}`);
    }
  });
  const counterTask = document.querySelector("#taskleft");
  counterTask.innerHTML = `${toDolist.length - checkedCount} task left!`;
  ///////////////////////////////////
}

export function earlyCheck() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    let indexTask = document.getElementById(key);
    if (indexTask != null) {
      document.getElementById(key).checked = "true";
    } else {
    }
  }
}

earlyCheck();

export default TaskLeft;
