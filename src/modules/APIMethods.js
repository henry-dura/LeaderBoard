const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6KHqaMm0pTawWD2YainT/scores/";

const getData = async () => {
  const response = await fetch(url);
  const data =  await response.json();
  return data.result;
};

const postData = async () => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({user : "Money", score: 253}),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
 
};

export {getData,postData};
