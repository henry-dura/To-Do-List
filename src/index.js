import "./style.css";
import add,{list, descriptionInput} from './modules/AddToList.js';
import displayInHtml from "./modules/DisplayInHtml";



descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    displayInHtml(list[list.length - 1]);
    descriptionInput.value = "";
    localStorage.setItem('Tasks', JSON.stringify(list));
  }
});

// function deleteTask(e){
//   console.log(e.target);

// }
