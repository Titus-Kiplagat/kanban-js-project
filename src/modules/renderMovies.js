import allItemsCount from './allItemsCount.js';
import cardMarkup from './cardMarkup.js';
import displayPopup from './displayPopup.js';
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
  const openPopup = () => {
    const commentBtns = document.querySelectorAll('.btn-comments');
    commentBtns.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const commentId = btn.getAttribute('id');
        displayPopup(commentId);
      });
    });
  };

  openPopup();

  handleLikeBtnClick();
  allItemsCount();
};

export default renderMovies;