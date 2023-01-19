import { list, Task } from './AddTaskToList.js';
import displayInHtml from './DisplayTaskInHtml.js';

const storedData = () => {
  const data = JSON.parse(localStorage.getItem('Tasks'));
  if (data) {
    data.forEach((task) => {
      const newTask = new Task(task.description);
      displayInHtml(newTask);
      list.push(newTask);
      localStorage.setItem('Tasks', JSON.stringify(list));
    });
  }
};

export default storedData;
