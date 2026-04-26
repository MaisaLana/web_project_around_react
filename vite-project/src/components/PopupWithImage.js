import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector){
        super(selector);
        this._image = this._popup.querySelector(".popup__image-expand");
        this._name = this._popup.querySelector(".popup__image-footer");
    }

    open(name, link, alt){
    this._image.src = link;
    this._image.alt = alt;
    this._name.textContent = name;
     super.open();
    }
    
}