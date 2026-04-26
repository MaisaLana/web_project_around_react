export class Card {
  constructor(title, link, isLiked, id, templateSelector, handleCardClick, handleLikeApi, doubleCheck) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._isLiked = isLiked;
    this._id = id;
    this._handleLikeApi = handleLikeApi;
    this._doubleCheck = doubleCheck;
  
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector(".gallery__item")  
      .cloneNode(true);

    return cardElement;
  }

  _handleLike(evt) {
    evt.target.classList.toggle("material-symbols-rounded");
    evt.target.classList.toggle("material-symbols-outlined");
  }


  _setEventListeners() {
    const likeButton = this._element.querySelector(".gallery__image-like");
    const trashButton = this._element.querySelector(".delete");
    const cardImage = this._element.querySelector(".gallery__image");

  
    likeButton.addEventListener("click", (evt) =>{
      this._handleLike(evt);
      this._handleLikeApi(this._id, this._isLiked);
  });
    trashButton.addEventListener("click", () => {
      this._doubleCheck(this._id, this._element)
    });
    cardImage.addEventListener("click", () => { 
      this._handleCardClick(this._title, this._link);
  });
 
  }

  generateCard() {
    this._element = this._getTemplate();
    
    const cardTitle = this._element.querySelector(".gallery__image-name");
    const cardImage = this._element.querySelector(".gallery__image");
    const likeButton = this._element.querySelector(".gallery__image-like");
    
    cardTitle.textContent = this._title;
    cardImage.src = this._link;
    if (!this._isLiked) {
      likeButton.classList.add("material-symbols-outlined");
    } else {
      likeButton.classList.add("material-symbols-rounded");
    }

    this._setEventListeners();

    return this._element;
  }
}

