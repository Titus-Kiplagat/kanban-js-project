import cardMarkup from './cardMarkup.js';

const renderMovies = (movies) => {
  const cardsContainer = document.getElementById('cards-container');
  cardsContainer.innerHTML = '';

  movies.forEach((movie) => {
    const card = cardMarkup(movie);
    cardsContainer.innerHTML += card;
  });
};

export default renderMovies;