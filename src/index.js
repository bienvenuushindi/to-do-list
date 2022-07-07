import Task from './modules/task';
import { list } from './modules/elements';
import './style.css';
import listItem from './modules/list-item';

const init = () => {
  const task1 = new Task('wash the dishes');
  const task2 = new Task('complete to Do list project');
  task1.appendToList();
  task2.appendToList();
  list.innerHTML += Task.list();
};

const addItemField = document.querySelector('.text-area');
window.addEventListener('load', () => {
  init();
});
document.addEventListener('keypress', function (ev) {
  const elmt = ev.target;
  if (ev.key === 'Enter') {
    if (elmt.classList.contains('add-task')) {
      const text = document.getElementById('add-task').value;
      if (!text) return;
      const task = new Task(text);
      task.appendToList();
      list.innerHTML += listItem(task);
    } else if (elmt.classList.contains('update')) {
      const text = elmt.value;
      const parentNode = elmt.closest('.item');
      const itemId = parseInt(parentNode.getAttribute('id'));
      const task = Task.getTask(itemId);
      task.description=text;
    }
  }
});

list.addEventListener('click', (ev) => {
  const element = ev.target;
  if (element.classList.contains('item') || element.classList.contains('add-task')) return;
  const parentNode = element.closest('.item');
  const itemId = parseInt(parentNode.getAttribute('id'));
  const task = Task.getTask(itemId);
  if (element.classList.contains('checkbox') || element.classList.contains('check')) {
    task.completed = !element.classList.contains('check');
    parentNode.firstChild.classList.toggle('d-none');
    parentNode.firstChild.nextSibling.classList.toggle('d-none');
    parentNode.querySelector('.item-label').classList.toggle('line-through');
  }
  if (element.classList.contains('item-label')) {
    const input = element.nextElementSibling;
    parentNode.classList.toggle('bg-yellow');
    element.classList.toggle('d-none');
    input.classList.toggle('d-none');
    parentNode.lastChild.classList.toggle('d-none');
    parentNode.lastChild.previousSibling.classList.toggle('d-none');
    input.value = task.description;
  }
  if (element.classList.contains('icon') || element.classList.contains('trash')) {
    if (element.classList.contains('trash')) {
      task.remove();
      parentNode.remove();
    } else {

    }
  }
});
