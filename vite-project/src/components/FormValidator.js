export class FormValidator {
    constructor() {}


enableValidation () {
    const formList = Array.from(document.querySelectorAll(".popup__form"));
    formList.forEach ((formElement) => {
    this._setEventListeners (formElement); 
});
}

_setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll(".popup__item"));
    const buttonElement = formElement.querySelector(".popup__button");
   
    inputList.forEach((inputElement) => {
        inputElement.addEventListener ("input", () => {
            this._isValid(formElement, inputElement);
            this._toggleButtonState (inputList, buttonElement);
        });
        });
}

_isValid (formElement, inputElement) {
   if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
     this._showInputError(formElement, inputElement, errorMessage);
} else {
    this._hideInputError (formElement, inputElement);
};
}

_showInputError(formElement, inputElement, errorMessage) {
    const spanElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.add("popup__item-error");
    spanElement.textContent = errorMessage;
    spanElement.classList.add("popup__item-error-message");
}

_hideInputError(formElement, inputElement) {
    const spanElement = formElement.querySelector(`.popup__${inputElement.id}-error`);
    inputElement.classList.remove("popup__item-error");
    spanElement.textContent = "";
    spanElement.classList.remove("popup__item-error-message");
}


_hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

_toggleButtonState (inputList, buttonElement) {
if(this._hasInvalidInput(inputList)){
    buttonElement.classList.add("popup__button-error");
    buttonElement.disabled = true;
} else {
    buttonElement.classList.remove("popup__button-error");
    buttonElement.disabled = false;
}
}
}
