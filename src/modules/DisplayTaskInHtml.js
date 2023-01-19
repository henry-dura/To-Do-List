import { list } from './AddTaskToList.js';

export const taskList = document.querySelector('.list-holder');

const displayInHtml = (item) => {
  const div = document.createElement('div');
  div.classList.add('list-block');
  div.innerHTML = `
    <div class="full-list-line">
        <div class="list-line">
            <input type="checkbox" class="check" name="${item.description}" value="${item.description}">
            <p contenteditable="true" class="description-paragraph">${item.description}</p>
        </div>
        
        <i class="fa-solid fa-trash-can" id="${list.length}" ></i>
    </div>
    <hr>`;
  taskList.appendChild(div);
};

export default displayInHtml;

 const clearButton = document.querySelector('.clear');
function checkboxSelected(e){
    if(e.target.classList.contains('check')){
        e.target.parentElement.parentElement.classList.toggle('checkbox-selected');
        e.target.parentElement.classList.toggle('checkbox-line');
        let id = e.target.parentElement.parentElement.children[1].id;
        list[id].completed = true;
    }

}

taskList.addEventListener('change',checkboxSelected);
clearButton.addEventListener('click',()=>{
    localStorage.setItem('Tasks', JSON.stringify(list.filter(task => task.completed === false)));
    window.location.reload();

})