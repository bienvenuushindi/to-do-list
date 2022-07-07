import listItem from './list-item.js';

export default class Task {
  static LIST = [];

  static trackIndex = 0;

  constructor(description, completed = false) {
    this.description = description;
    this.completed = completed;
    this.index = Task.trackIndex++;
  }

  get completed() {
    return this._completed;
  }

  set completed(value) {
    this._completed = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  appendToList() {
    Task.LIST.push(this);
  }

  remove() {
    Task.LIST = [...Task.LIST.filter(x => x.index !== this.index)];
  }


  static getTask(id) {
    return Task.LIST.find(x => x.index === id);
  }

  static list() {
    return Task.LIST.map((item) => listItem(item)).join('');
  }
}