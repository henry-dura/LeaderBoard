const scoreName = document.querySelector('#name');
const score = document.querySelector('#score');

class CreateScore{
    constructor(yourName,yourScore){
        this.yourName = yourName;
        this.yourScore = yourScore;
    }
}


const addNewScore = ()=>{
    const newScore = new CreateScore(scoreName.value,score.value);
    displayInHtml(newScore);
}