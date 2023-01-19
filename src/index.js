import "./style.css";
import add,{list, descriptionInput} from './modules/AddToList.js';
import displayInHtml,{taskList} from "./modules/DisplayInHtml";
import storedData from "./modules/LoadStoredData";



function deleteTask(e){
  list.splice(e.target.id,1);
  localStorage.setItem('Tasks', JSON.stringify(list));
  window.location.reload();
  
}

taskList.addEventListener('click', deleteTask);


document.addEventListener('DOMContentLoaded',storedData);

descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    
  }
});







