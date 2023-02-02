const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SjEdYh0yO5VuWG6dws4E/scores/';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

const postData = async (newScore) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: newScore.user,
      score: newScore.score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export { getData, postData };
