import listItem from './list-item.js';
import TaskStorage from './task-storage';

export default class Task {
  static LIST = TaskStorage.exist() ? TaskStorage.get() : [];


  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = Task.LIST.length;
  }

  appendToList() {
    Task.LIST.push(this);
  }

  static remove(index) {
    Task.LIST = [...Task.LIST.filter(x => x.index !== index)];
    Task.updateIndexes();
  }

  static updateIndexes() {
    let initIndex = 0;
    Task.LIST.forEach(elmt => elmt.index = initIndex++);
  }


  static getTask(id) {
    return Task.LIST.find(x => x.index === id);
  }

  static list() {
    return Task.LIST.map((item) => listItem(item)).join('');
  }

  static updateStorage() {
    new TaskStorage(Task.LIST);
  }
}