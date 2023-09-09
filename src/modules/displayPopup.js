import { createPopup, createNewComment } from './createPopupMarkup.js';
import { createComment } from './fetchAndPostComments.js';
import { detailsAll, popupCloseBtn } from './handlePopupCloseBtn.js';

const displayPopup = async (id) => {
  const allpopup = document.querySelector('.popupContainer');
  const { body } = document;
  body.style.overflow = 'hidden';

  allpopup.innerHTML = '';

  const movieDetail = await detailsAll(id);
  allpopup.append(createPopup(movieDetail));
  allpopup.style.display = 'flex';

  const commentLine = document.querySelector('.commentDisplay');
  const comments = await createComment(id);
  commentLine.append(comments);

  popupCloseBtn();
  createNewComment();
};

export default displayPopup;