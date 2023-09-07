import { fetchLikes } from './likes.js';

const fetchAndDisplayLikes = (movieID) => {
  fetchLikes().then((data) => {
    const likesData = data.find((item) => item.item_id === movieID);
    let likesCount = 0;
    if (likesData) {
      likesCount = likesData.likes;
    }
    const likesSpan = document.getElementById(`likes-count-${movieID}`);
    likesSpan.textContent = `${likesCount} likes`;
  }).catch((error) => {
    throw new Error(error.message);
  });
};

export default fetchAndDisplayLikes;