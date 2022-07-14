export const getItem = () => JSON.parse(localStorage.getItem('tasks'));

export const exist = () => !!localStorage.getItem('tasks');

export const create = (item) => localStorage.setItem('tasks', JSON.stringify(item));