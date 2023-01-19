import { list } from './AddTaskToList.js';

export default function deleteTask(e) {
  if (e.target.classList.contains('fa-trash-can')) {
    list.splice(e.target.id, 1);
    localStorage.setItem('Tasks', JSON.stringify(list));
    window.location.reload();
  }
}
