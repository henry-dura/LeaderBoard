import './style.css';
import addNewScore,{form} from './modules/addNewScore';


form.addEventListener('submit',(event)=>{
  event.preventDefault();
  addNewScore();

})


