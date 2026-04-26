export class ImgProfile {
  constructor(image) {
    this._image = document.querySelector(image);
  }

  editImage(link) {        
    this._image.src = link;
  }
}
