import { list } from './AddTaskToList.js';
import { taskList } from './DisplayTaskInHtml.js';

const clearButton = document.querySelector('.clear');

function checkboxSelected(e) {
  if (e.target.classList.contains('check')) {
    e.target.parentElement.classList.toggle('checkbox-line');
    e.target.parentElement.parentElement.children[1].classList.toggle('hide');
    e.target.parentElement.parentElement.children[2].classList.toggle('hide');
    const { id } = e.target.parentElement.parentElement.children[1];

    if (list[id].completed) {
      list[id].completed = false;
    } else {
      list[id].completed = true;
    }

    localStorage.setItem('Tasks', JSON.stringify(list));
  }
}

function deleteCompleted() {
  localStorage.setItem('Tasks', JSON.stringify(list.filter((task) => task.completed === false)));
  window.location.reload();
}

const completedTaskRemove = () => {
  taskList.addEventListener('change', checkboxSelected);
  clearButton.addEventListener('click', deleteCompleted);
};

export default completedTaskRemove;