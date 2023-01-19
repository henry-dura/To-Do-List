import "./style.css";
import add,{list, descriptionInput} from './modules/AddTaskToList.js';
import displayInHtml,{taskList} from "./modules/DisplayTaskInHtml";
import storedData from "./modules/LoadStoredTasks";
import deleteTask from "./modules/DeleteTask";
import editTask from "./modules/EditTasks";





taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click',editTask);

document.addEventListener('DOMContentLoaded',storedData);

descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add(); 
  }
});







