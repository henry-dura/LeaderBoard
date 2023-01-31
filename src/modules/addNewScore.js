import displayInHtml from './displayInHtml.js';

const scoreName = document.querySelector('#name');
const score = document.querySelector('#score');
export const form = document.querySelector('form');

class CreateScore {
  constructor(yourName, yourScore) {
    this.yourName = yourName;
    this.yourScore = yourScore;
  }

  static clear() {
    scoreName.value = '';
    score.value = '';
  }
}

const addNewScore = () => {
  if (scoreName.value && score.value >= 0) {
    const newScore = new CreateScore(scoreName.value, score.value);
    displayInHtml(newScore);
    CreateScore.clear();
  }
};

export default addNewScore;