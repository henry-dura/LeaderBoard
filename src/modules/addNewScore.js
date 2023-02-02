import { postData } from './APIMethods.js';

const userName = document.querySelector('#name');
const score = document.querySelector('#score');
export const form = document.querySelector('form');

class CreateScore {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const addNewScore = () => {
  if (userName.value && score.value >= 0) {
    const newScore = new CreateScore(userName.value, score.value);
    postData(newScore);
    form.reset();
  }
};

export default addNewScore;