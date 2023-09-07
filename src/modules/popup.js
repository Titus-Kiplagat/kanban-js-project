/* eslint-disable no-console */
import closeImg from '../assets/close.png';

const fetchData = async (movieid) => {
  console.log(movieid);
  const url = `https://www.tvmaze.com/shows/1/under-the-dome${movieid}`;
  const respone = await fetch(url);
  const movies = await respone.json();
  return movies;
};
const popContainer = document.querySelector('.popContainer');
const displayCommentPop = async (movieid) => {
  const movieDetails = await fetchData(movieid);
  const popup = document.createElement('div');
  popup.classList.add('popup');
  const img = document.createElement('img');
  img.setAttribute('src', closeImg);
  img.className = 'closeBtn';
  popup.innerHTML = `
    ${img.outerHTML}
    <img class="img" src="${movieDetails.image.original}" alt="${movieDetails.name}" />
    <h2 class="title">${movieDetails.name}</h2>
    <p class="summary">${movieDetails.summary}</p>
    <div class="commentDiv">
        <h4>Comments</h4>
        <p class="comments">2023/07/21: any or dummy comment</p>
    </div>
    <div class="formDiv">
        <h2>Add a Comment</h2>
        <form class="commentForm">
            <input type="text" class="nameField" placeholder="Your Name"/>
            <textarea class="commentField" placeholder="Your Remarks" cols="30" rows="5"></textarea>
            <button type="submit" class="addComment">add Comment</button>
        </form>
    <div>    
    `;

  popContainer.appendChild(popup);
  const close = document.querySelector('.closeBtn');
  close.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    popContainer.style.display = 'none';
    window.location.reload();
  });
};

export default displayCommentPop;