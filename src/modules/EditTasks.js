import { list } from './AddTaskToList.js';
import { taskList } from './DisplayTaskInHtml.js';

export default function editTask(e) {
  const oldText = e.target.children[0].children[1].textContent;
  taskList.addEventListener('focusout', () => {
    const newText = e.target.children[0].children[1].textContent;
    list.forEach((task) => {
      if (task.description === oldText) {
        task.description = newText;
        localStorage.setItem('Tasks', JSON.stringify(list));
      }
    });
  });
}