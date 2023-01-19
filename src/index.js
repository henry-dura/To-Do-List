import "./style.css";
import add,{list, descriptionInput} from './modules/AddToList.js';
import displayInHtml,{taskList} from "./modules/DisplayInHtml";
import storedData from "./modules/LoadStoredData";
import deleteTask from "./modules/DeleteTask";




taskList.addEventListener('click', deleteTask);

document.addEventListener('DOMContentLoaded',storedData);

descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    
  }
});







