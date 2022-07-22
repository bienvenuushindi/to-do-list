import listItem from './list-item.js';
import * as TaskStorage from './task-storage.js';

let TaskList = TaskStorage.getItem();
export default class Task {
  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = TaskList.length + 1;
  }

  appendToList() {
    TaskList.push(this);
  }
}

export const updateIndexes = () => {
  let initIndex = 1;
  TaskList.forEach((elmt) => {
    elmt.index = initIndex;
    initIndex += 1;
  });
};

export const updateStorage = () => {
  TaskStorage.create(TaskList);
};

export const remove = (index) => {
  TaskList = [...TaskList.filter((x) => x.index !== index)];
  updateIndexes();
};

export const getTask = (id) => TaskList.find((x) => x.index === id);

export const list = () => TaskList.map((item) => listItem(item)).join('');

export const clearCompleted = () => {
  TaskList = [...TaskList.filter((x) => !x.completed)];
  updateIndexes();
};
