
import {list} from './AddToList.js';


export const taskList = document.querySelector(".list-holder");


const displayInHtml = (item)=>{
    const div = document.createElement("div");
    div.classList.add("list-block");
    div.innerHTML = `
    <div class="full-list-line">
        <div class="list-line">
            <input type="checkbox"  name="${item.description}" value="${item.description}">
            <p>${item.description}</p>
        </div>
        
        <i class="fa-solid fa-trash-can" id="${list.length}" ></i>
    </div>
    <hr>`;
 taskList.appendChild(div);

}

export default displayInHtml;



