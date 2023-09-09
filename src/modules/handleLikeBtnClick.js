import fetchAndDisplayLikes from './fetchAndDisplayLikes.js';
import { postLikes } from './likes.js';

const handleLikeBtnClick = () => {
  const likeButtons = document.querySelectorAll('.like-button');
  likeButtons.forEach((likeButton) => {
    likeButton.addEventListener('click', async (event) => {
      const likeButtonID = parseInt(event.target.id, 10);
      await postLikes(likeButtonID);
      fetchAndDisplayLikes(likeButtonID);
    });
  });
};

export default handleLikeBtnClick;