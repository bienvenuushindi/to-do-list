import Task, {
  updateStorage,
  getTask,
  clearCompleted,
  list as listTask,
  remove as removeTask,
} from './modules/task.js';
import listBox, { clearBtn } from './modules/elements.js';
import './style.css';
import listItem from './modules/list-item.js';

const init = () => {
  updateStorage();
  listBox.innerHTML += listTask();
};

window.addEventListener('load', () => {
  init();
});
document.addEventListener('keypress', (ev) => {
  const elmt = ev.target;
  if (ev.key === 'Enter') {
    if (elmt.classList.contains('add-task')) {
      const text = document.getElementById('add-task').value;
      if (!text) return;
      const task = new Task(text);
      task.appendToList();
      updateStorage();
      listBox.innerHTML += listItem(task);
    } else if (elmt.classList.contains('update')) {
      const text = elmt.value;
      const parentNode = elmt.closest('.item');
      const label = parentNode.querySelector('.item-label');
      const itemId = parseInt(parentNode.getAttribute('id'), 10);
      const task = getTask(itemId);
      task.description = text;
      updateStorage();
      parentNode.classList.remove('bg-yellow');
      label.classList.remove('d-none');
      label.nextElementSibling.classList.add('d-none');
      label.innerHTML = text;
    }
  }
});

listBox.addEventListener('click', (ev) => {
  const element = ev.target;
  if (element.classList.contains('item') || element.classList.contains('add-task')) return;
  const parentNode = element.closest('.item');
  if (!parentNode) return;
  const itemId = parseInt(parentNode.getAttribute('id'), 10);
  const task = getTask(itemId);
  if (element.classList.contains('checkbox') || element.classList.contains('check')) {
    const completed = element.classList.contains('check');
    task.completed = !completed;
    updateStorage();
    parentNode.firstChild.classList.toggle('d-none');
    parentNode.firstChild.nextSibling.classList.toggle('d-none');
    if (element.classList.contains('check')) parentNode.querySelector('.item-label').classList.remove('line-through');
    else parentNode.querySelector('.item-label').classList.add('line-through');
  }

  if (element.classList.contains('item-label')) {
    const input = element.nextElementSibling;
    const active = document.querySelector('.bg-yellow');

    if (active) {
      active.classList.remove('bg-yellow');
      active.querySelector('.item-label').classList.toggle('d-none');
      active.querySelector('.update').classList.toggle('d-none');
    }

    parentNode.classList.toggle('bg-yellow');
    element.classList.toggle('d-none');
    input.classList.toggle('d-none');
    parentNode.lastChild.classList.toggle('d-none');
    parentNode.lastChild.previousSibling.classList.toggle('d-none');
    input.value = task.description;
  }

  if (element.classList.contains('icon') || element.classList.contains('trash')) {
    if (element.classList.contains('trash')) {
      removeTask(task.index);
      updateStorage();
      parentNode.remove();
    }
  }
});

clearBtn.addEventListener('click', () => {
  clearCompleted();
  updateStorage();
  // remove completed tasks
  document.querySelectorAll('.line-through').forEach((elmt) => {
    elmt.closest('.item').remove();
  });
});
