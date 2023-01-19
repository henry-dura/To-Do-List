import {list} from './AddTaskToList.js';
import displayInHtml from './DisplayTaskInHtml.js';

const storedData = ()=>{
    const data = JSON.parse(localStorage.getItem('Tasks'));
    if(data){
        data.forEach(task =>{
            displayInHtml(task);
            list.push(task);
        })
    }
}

export default storedData;

