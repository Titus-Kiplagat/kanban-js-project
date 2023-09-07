import { involvementURL, involvementAPIKEY } from '../config.js';

const URL = `${involvementURL}/apps/${involvementAPIKEY}/likes`;

export const postLikes = (movieID) => fetch(URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ item_id: movieID }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to post like');
    }
  })
  .catch((error) => {
    throw new Error(error.message);
  });

export const fetchLikes = async () => {
  const response = await fetch(URL);
  return response.json();
};