import './style.css';
import addNewScore, { form } from './modules/addNewScore.js';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewScore();
});
