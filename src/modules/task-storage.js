export default class TaskStorage {
  constructor(item) {
    this.setItem(item);
  }

  setItem(item){
    localStorage.setItem('tasks',JSON.stringify(item))
  }

  static get(){
    return JSON.parse(localStorage.getItem('tasks'));
  }

  static exist(){
    return !!localStorage.getItem('tasks');
  }
}