/* eslint-disable no-undef */
import renderMovies from './renderMovies.js';
import heart from '../assets/heart.png';
import displayCommentPop from './popup.js';

const fetchData = async () => {
  await fetch(' https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((data) => {
      renderMovies(data);
    });

  const result = response.data;
  const movies = result.splice(0, 12);
  movies.forEach((movie) => {
    const img = document.createElement('img');
    img.setAttribute('src', heart);
    img.className = 'like-icon';
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${movie.image.medium}" alt="${movie.name}" class="image">
      <h3>${movie.name}</h3>
      <div class="card-body">
      <button class="commentBtn">Comment</button>
      <p>${img.outerHTML}<span class="like-count">0</span>Likes</p>
      </div>
      `;
    fetchData.appenChild(card);

    const likeIcon = card.querySelector('.like-icon');
    likeIcon.addEventListener('click', () => {
      likeMovie(movie.id);
    });
  });
  const commentBtn = card.querySelector('.commentBtn');
  const popContainer = document.querySelector('.popContainer');
  commentBtn.addEventListener('Click', async (e) => {
    e.preventDefault();
    const movieid = movie.id;
    await displayCommentPop(movieid);
    document.body.style.overflow = 'hidden';
    popContainer.style.display = 'block';
  })
    .catch((error) => {
      throw new Error(error);
    });
};

export default fetchData;