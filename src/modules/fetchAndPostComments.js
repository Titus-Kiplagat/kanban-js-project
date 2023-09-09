import { involvementAPIKEY, involvementURL } from '../config.js';

export const postComment = async (id, name, date, comment) => {
  const apiFetch = await fetch(`${involvementURL}/apps/${involvementAPIKEY}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id, creation_date: date, username: name, comment,
    }),
  });
  return apiFetch;
};

const fetchComments = async (id) => {
  const gotCmt = await fetch(`${involvementURL}/apps/${involvementAPIKEY}/comments?item_id=${id}`);
  const intD = await gotCmt.json();

  if (!gotCmt.ok) {
    return null;
  }
  return intD;
};

const newComment = ({ comment, username, creation_date: date }) => {
  const cmtliEle = document.createElement('li');
  cmtliEle.className = 'comment-li';
  cmtliEle.innerHTML = `
  <p class="date"><span><i class="fa-solid fa-user"> </i><span>${date} </span> </span><span>${username}: </span></p>
  <p class = "user-comment"><span> ${comment} </span></p>
  `;
  return cmtliEle;
};

export const createComment = async (id) => {
  const allComment = document.createElement('ul');
  allComment.id = 'comments-section';
  allComment.innerHTML = '';
  const comments = await fetchComments(id);

  if (comments === null) {
    const nocmtliEle = document.createElement('p');
    nocmtliEle.className = 'no_comment_li';
    nocmtliEle.textContent = 'Be the first to comment';
    allComment.append(nocmtliEle);
  } else {
    comments.forEach((comment) => {
      allComment.append(newComment(comment));
    });
  }
  return allComment;
};
