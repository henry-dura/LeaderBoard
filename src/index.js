import './style.css';
import addNewScore, { form } from './modules/addNewScore.js';
import {getData,postData} from './modules/APIMethods';
import displayInHtml,{table} from './modules/displayInHtml';
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewScore();
});

refresh.addEventListener('click', async ()=>{
  let dataList = await getData();
  table.innerHTML = '';
  dataList = dataList.sort((a,b)=> b.score - a.score);
  dataList.forEach(data => {
    displayInHtml(data);
  });

});