import cardMarkup from './cardMarkup.js';
import fetchAndDisplayLikes from './fetchAndDisplayLikes.js';
import fetchData from './fetchData.js';
import handleLikeBtnClick from './handleLikeBtnClick.js';

const renderMovies = async () => {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = '';

  await fetchData().then((movies) => {
    movies.forEach((movie) => {
      const card = cardMarkup(movie);
      cardsContainer.innerHTML += card;

      fetchAndDisplayLikes(movie.id);
    });
  }).catch((error) => {
    throw new Error(error.message);
  });

  handleLikeBtnClick();
};

export default renderMovies;