export default class TaskStorage {
  static get() {
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static exist() {
    return !!localStorage.getItem('tasks');
  }

  static create(item) {
    localStorage.setItem('tasks', JSON.stringify(item));
  }
}