import "./style.css";
import add,{list, descriptionInput} from './modules/AddToList.js';
import displayInHtml from "./modules/DisplayInHtml";



descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    displayInHtml();
    descriptionInput.value = "";
    console.log(list);
  }
});
