import listItem from './list-item.js';

export default class Task {
  static LIST = [];

  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
  }

  appendToList() {
    this.index = Task.LIST.length;
    Task.LIST.push(this);
  }

  static list() {
    return Task.LIST.map((item) => listItem(item)).join('');
  }
}