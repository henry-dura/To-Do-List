import "./style.css";
import add,{list,descriptionInput} from './modules/Add.js';

const listHolder = document.querySelector(".list-holder");




// const list = [
//   {
//     description: "Morning Prayers",
//     completed: true,
//     index: 1,
//   },
//   {
//     description: "Going to the Gym",
//     completed: true,
//     index: 3,
//   },
//   {
//     description: "Solving An Algorithmic challenge",
//     completed: false,
//     index: 2,
//   },
// ];

// const sortedList = list.sort((a, b) => a.index - b.index);

const displayInHtml = ()=>{
  
    const div = document.createElement("div");
    div.classList.add("list-block");
    div.innerHTML = `
    <div class="list-line">
    <input type="checkbox"  name="${list[list.length-1].description}" value="${list[list.length-1].description}">
    <p>${list[list.length-1].description}</p>
    </div>
    <hr>`;
    listHolder.appendChild(div);
}


descriptionInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    add();
    displayInHtml();
    descriptionInput.value = "";
    console.log(list);
  }
});
