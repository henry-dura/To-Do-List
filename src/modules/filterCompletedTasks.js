import { list } from "./AddTaskToList.js";
import { taskList } from './DisplayTaskInHtml.js';

const clearButton = document.querySelector(".clear");

function checkboxSelected(e) {
  if (e.target.classList.contains("check")) {
    // e.target.parentElement.parentElement.classList.toggle("checkbox-selected");
    e.target.parentElement.classList.toggle("checkbox-line");
    e.target.parentElement.parentElement.children[1].classList.toggle('hide');
    e.target.parentElement.parentElement.children[2].classList.toggle('hide');
    let id = e.target.parentElement.parentElement.children[1].id;
    list[id].completed = true;
  }
}

function deleteCompleted() {
  localStorage.setItem("Tasks",JSON.stringify(list.filter((task) => task.completed === false)));
  window.location.reload();
}

const completedTaskRemove = () => {
  taskList.addEventListener("change", checkboxSelected);
  clearButton.addEventListener("click", deleteCompleted);
};

export default completedTaskRemove;