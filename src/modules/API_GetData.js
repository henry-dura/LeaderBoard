const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YwLfjpGJLs9T4f3VMCZd/scores/';

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.result;
};

export { getData, url };
