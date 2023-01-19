
import {list} from './AddTaskToList.js';


export const taskList = document.querySelector(".list-holder");


const displayInHtml = (item)=>{
    const div = document.createElement("div");
    div.classList.add("list-block");
    div.innerHTML = `
    <div class="full-list-line">
        <div class="list-line">
            <input type="checkbox"  name="${item.description}" value="${item.description}">
            <p contenteditable="true" class="description-paragraph">${item.description}</p>
        </div>
        
        <i class="fa-solid fa-trash-can" id="${list.length}" ></i>
    </div>
    <hr>`;
 taskList.appendChild(div);

}

export default displayInHtml;



function editable(e){
    let oldText = e.target.children[0].children[1].textContent;
    let newText;
    taskList.addEventListener('focusout',()=>{
        newText = e.target.children[0].children[1].textContent;
        list.forEach(task =>{
            if(task.description == oldText){
                task.description = newText;
                localStorage.setItem('Tasks', JSON.stringify(list));
            }
        })
    });

    
}

taskList.addEventListener('click',editable);