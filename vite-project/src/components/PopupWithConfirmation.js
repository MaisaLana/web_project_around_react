import Popup from "./Popup.js";

export class PopupWithConfirmation extends Popup{
constructor(selector, handleFormSubmit, id, element){
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._id = id;
    this._element = element;
    this._form = this._popup.querySelector(".popup__form");
}

getValues(id, element){
  this._id = id;
  this._element = element;
}

setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._id, this._element);
      this.close();
    })
}

close() {
    super.close();
  }
}