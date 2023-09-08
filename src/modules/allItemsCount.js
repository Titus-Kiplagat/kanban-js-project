import fetchData from './fetchData.js';

const allItemsCount = () => {
  const countSpan = document.getElementById('count-span');
  fetchData().then((data) => {
    countSpan.textContent = `(${data.length})`;
  }).catch((error) => {
    throw new Error(error.message);
  });
};

export default allItemsCount;