import { list } from './AddTaskToList.js';
import { taskList } from './DisplayTaskInHtml.js';

export default function editTask(e) {
  if (e.target.classList.contains('fa-ellipsis-vertical')) {
    e.target.classList.add('hide');
    const taskEdited = e.target.parentElement.children[0].children[1];
    taskEdited.contentEditable = 'true';
    taskEdited.focus();
    const oldText = taskEdited.textContent;

    taskList.addEventListener('focusout', () => {
      e.target.classList.remove('hide');
      taskEdited.contentEditable = 'false';
      const newText = taskEdited.textContent;
      list.forEach((task) => {
        if (task.description === oldText) {
          task.description = newText;
          localStorage.setItem('Tasks', JSON.stringify(list));
          window.location.reload();
        }
      });
    });
  }
}
