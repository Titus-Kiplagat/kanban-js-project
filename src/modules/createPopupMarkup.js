const createPopup = ({
  image, name, summary, genres, officialSite, id, rating,
}) => {
  const popupContent = document.createElement('div');
  popupContent.setAttribute('class', 'popupContainer2');
  popupContent.innerHTML = `
    
    <div class="wholePopup">
  
    <button class="close-btn">X</button>
  
        <div class="subDivOne">
            <img class="movie-img" src="${image.medium}" alt="Poster"></img>
            <h2 class="movieName">${name}</h2>
            <form action="" class="form"></form>
        </div>
  
        <div class="subDivTwo">
  
            <div class="description">
                <p id="sumTxt">Description:</p> ${summary}
            </div>
            <div class="smallItems"><span class="generes">Genre: </span> ${genres}</div>
  
            <div class="smallItems"><span class="titles">OfficialSite: </span> <a href="${officialSite}"
                    target="_blank">OfficialSite</a>
            </div>
  
            <div class="smallItems"><span class="titles">ID: </span> ${id}</div>
            <div class="smallItems"><span class="titles">IMDb Rating: </span> ${rating.average}</div>
  
        </div>
  
        <div class="comment-container">
  
            <p class="comments">Comments(<span class="commentsCount"></span>)</p>
  
            <form class="inputComment">
                <input required type="text" class="typeName" id="typeName" placeholder="Your Name"><br>
                <input required type="text" class="typeComment" id="typeComment" placeholder="Your comment"><br>
                <button type="submit" class="submitComment" id="${id}">Submit</button>
            </form>
  
            <div class="commentDisplay">
            </div>
  
        </div>
  
        <div class="forStyling
        "></div>
  
    </div>
  
    `;

  return popupContent;
};

export default createPopup;