const url =
  "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6KHqaMm0pTawWD2YainT/scores/";

const getData = async () => {
  const response = await fetch(url);
  const data = response.json();
  console.log(data);
};

const postData = async () => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      user : "Dura",
      score: 90,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

export {getData,postData};
