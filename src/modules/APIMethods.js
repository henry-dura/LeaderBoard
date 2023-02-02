const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SjEdYh0yO5VuWG6dws4E/scores/';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

const postData = async (newScore) => {
    try{
        const response =  await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              user: newScore.user,
              score: newScore.score,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
          if(!response.ok) throw new Error("Score not Submited, Kindly try again");
          mssg();

    }catch(error){
        mssg(error)
    }
 
};
const success = document.querySelector('.success');
const failure = document.querySelector('.failure');
const mssg = (message = 'success') =>{
    if (message === 'success') {
        success.classList.remove('hide')
        setTimeout(()=>{ success.classList.add('hide')},2000);
       
    }else{
        failure.classList.remove('hide')
        setTimeout(()=>{ failure.classList.add('hide')},2000);
    }
    
}

export { getData, postData };
