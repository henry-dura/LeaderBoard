import './style.css';
import addNewScore, { form } from './modules/addNewScore.js';
import {getData,postData} from './modules/APIMethods';
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewScore();
  postData()
});

refresh.addEventListener('click', getData);