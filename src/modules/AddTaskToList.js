export const descriptionInput = document.querySelector('#description-input');
export const list = [];

export class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
    this.index = list.length + 1;
  }
}

const add = () => {
  if (descriptionInput.value) {
    const task = new Task(descriptionInput.value);
    list.push(task);
    descriptionInput.value = '';
    localStorage.setItem('Tasks', JSON.stringify(list));
    window.location.reload();
  }
};

export default add;