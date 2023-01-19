import {list} from './AddToList.js';
import displayInHtml from "./DisplayInHtml";

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