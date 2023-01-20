import { list } from './AddTaskToList.js';

export const taskList = document.querySelector('.list-holder');

const displayInHtml = (item) => {
  const div = document.createElement('div');
  div.classList.add('list-block');
  div.innerHTML = `
    <div class="full-list-line">
        <div class="list-line">
            <input type="checkbox" class="check" name="${item.description}" value="${item.description}">
            <p  class="description-paragraph">${item.description}</p>
        </div>
        
        <i class=" hide fa-solid fa-trash-can" id="${list.length}" ></i>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </div>
    <hr>`;
  taskList.appendChild(div);
};

export default displayInHtml;
