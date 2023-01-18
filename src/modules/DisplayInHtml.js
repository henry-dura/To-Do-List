
import {list} from './AddToList.js';


const listHolder = document.querySelector(".list-holder");

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

export default displayInHtml;
