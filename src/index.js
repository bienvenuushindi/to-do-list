import Task from './modules/Task.js';
import { list } from './modules/elements.js';
import './style.css';
import listItem from './modules/list-item';

const init = () => {
  const task1 = new Task('wash the dishes');
  const task2 = new Task('complete to Do list project');
  task1.appendToList();
  task2.appendToList();
  list.innerHTML += Task.list();
};


window.addEventListener('load', () => {
  init();
});
document.addEventListener('keypress', function (ev) {
  if (ev.key === 'Enter' && ev.target.classList.contains('add-task')) {
    const text = document.getElementById('add-task').value;
    if (!text) return;
    const task=new Task(text);
    task.appendToList();
    list.innerHTML +=listItem(task);
  }
});


