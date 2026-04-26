import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
    constructor(selector, handleFormSubmit){
        super(selector);
        this._handleFormSubmit = handleFormSubmit;  
        this._form = this._popup.querySelector(".popup__form");
        this._inputList = this._form.querySelectorAll(".popup__item");
    }

    _getInputValues(){
    const formValues = {};
    this._inputList.forEach(input => {
      formValues[input.id] = input.value;
    });

    return formValues;
    }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}