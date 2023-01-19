import "./style.css";
import add,{list, descriptionInput} from './modules/AddToList.js';
import displayInHtml from "./modules/DisplayInHtml";
import storedData from "./modules/LoadStoredData";



document.addEventListener('DOMContentLoaded',storedData);

descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    displayInHtml(list[list.length - 1]);
    descriptionInput.value = "";
    localStorage.setItem('Tasks', JSON.stringify(list));
  }
});







