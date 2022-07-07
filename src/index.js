import Task from './modules/task';
import { list } from './modules/elements';
import './style.css';
import listItem from './modules/list-item';
import TaskStorage from './modules/task-storage';

const init = () => {
  Task.updateStorage();
  console.log(Task.LIST)
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
      Task.updateStorage();
      list.innerHTML += listItem(task);
    } else if (elmt.classList.contains('update')) {
      const text = elmt.value;
      const parentNode = elmt.closest('.item');
      const itemId = parseInt(parentNode.getAttribute('id'));
      const task = Task.getTask(itemId);
      task.description = text;
      Task.updateStorage();
    }
  }
});

list.addEventListener('click', (ev) => {
  const element = ev.target;
  if (element.classList.contains('item') || element.classList.contains('add-task')) return;
  const parentNode = element.closest('.item');
  const itemId = parseInt(parentNode.getAttribute('id'));
  const task = Task.getTask(itemId);
 console.log(task);
  if (element.classList.contains('checkbox') || element.classList.contains('check')) {
    const completed=element.classList.contains('check');
    task.completed = !completed;
    Task.updateStorage();
    parentNode.firstChild.classList.toggle('d-none');
    parentNode.firstChild.nextSibling.classList.toggle('d-none');
      if(element.classList.contains('check')) parentNode.querySelector('.item-label').classList.remove('line-through');
      else parentNode.querySelector('.item-label').classList.add('line-through');


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
      Task.remove(task.index);
      Task.updateStorage();
      parentNode.remove();
    } else {

    }
  }
});
