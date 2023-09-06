import renderMovies from './renderMovies.js';

const fetchData = async () => {
  await fetch(' https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      renderMovies(data);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default fetchData;