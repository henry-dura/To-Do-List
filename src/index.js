import _ from "lodash";
import './style.css';


const listHolder = document.querySelector('.list-holder');

const list = [
  {
    description: 'Morning Prayers',
    completed: true,
    index:1
  },
  {
    description: 'Going to the Gym',
    completed: true,
    index:3
  },
  {
    description: 'Solving An Algorithmic challenge',
    completed: false,
    index:2
  }
];

let sortedList = list.sort((a,b) => a.index - b.index);

for(let i = 0; i< sortedList.length;i++){
  const div = document.createElement('div');
  div.classList.add('list-block')
  div.innerHTML = `
  <div class="list-line">
  <input type="checkbox"  name="${sortedList[i].description}" value="${sortedList[i].description}">
  <p>${sortedList[i].description}</p>
  </div>
  <hr>`;
  listHolder.appendChild(div);

}



