import {list} from './AddTaskToList.js';
import {taskList} from "./DisplayTaskInHtml";

export default function editTask(e){
    let oldText = e.target.children[0].children[1].textContent;
    taskList.addEventListener('focusout',()=>{
        let newText = e.target.children[0].children[1].textContent;
        list.forEach(task =>{
            if(task.description == oldText){
                task.description = newText;
                localStorage.setItem('Tasks', JSON.stringify(list));
            }
        })
    });    
}