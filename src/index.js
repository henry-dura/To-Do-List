import './style.css';
import add, { descriptionInput } from './modules/AddTaskToList.js';
import { taskList } from './modules/DisplayTaskInHtml.js';
import storedData from './modules/LoadStoredTasks.js';
import deleteTask from './modules/DeleteTask.js';
import editTask from './modules/EditTasks.js';
import completedTaskRemove from './modules/filterCompletedTasks.js';

taskList.addEventListener('click', deleteTask);
taskList.addEventListener('click', editTask);
completedTaskRemove();

descriptionInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    add();
  }
});

document.addEventListener('DOMContentLoaded', storedData);