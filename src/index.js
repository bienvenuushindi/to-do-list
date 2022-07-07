import _ from 'lodash';
import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Congratulation you are', 'Ready to go'], ' ');
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());