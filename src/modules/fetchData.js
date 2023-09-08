import { moviesURL } from '../config.js';

const fetchData = async () => {
  const response = await fetch(moviesURL);
  return response.json();
};

export default fetchData;