import listItem from './list-item.js';
import * as TaskStorage from './task-storage.js';

export default class Task {
  LIST = TaskStorage.exist() ? TaskStorage.getItem() : [];

  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = Task.LIST.length + 1;
  }

  appendToList() {
    Task.LIST.push(this);
  }
}

export const updateIndexes = () => {
  let initIndex = 1;
  Task.LIST.forEach((elmt) => {
    elmt.index = initIndex;
    initIndex += 1;
  });
};

export const updateStorage = () => {
  TaskStorage.create(Task.LIST);
};

export const remove = (index) => {
  Task.LIST = [...Task.LIST.filter((x) => x.index !== index)];
  updateIndexes();
};

export const getTask = (id) => Task.LIST.find((x) => x.index === id);

export const list = () => Task.LIST.map((item) => listItem(item)).join('');

export const clearCompleted = () => {
  Task.LIST = [...Task.LIST.filter((x) => !x.completed)];
  updateIndexes();
};
