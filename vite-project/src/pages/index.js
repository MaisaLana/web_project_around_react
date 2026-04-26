import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForms from "../components/PopupWithForms.js";
import Userinfo from "../components/UserInfo.js";
import { Api } from "../components/API.js";
import { ImgProfile } from "../components/ImgProfile.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

const API = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "4d6c5a35-bd42-4b4d-bec8-cf5b5ab26f12",
    "Content-Type": "application/json"
  },
});


//instances
const validator = new FormValidator();
validator.enableValidation();

const profilePopup = new PopupWithForms("#popup__profile", (data) =>{
  API.editProfile({
    name: data.name,
    about: data.description
  })
  .then((userData)=>{
    userInfo.setUserInfo({
      name:userData.name,
      description:userData.about
    });

    profilePopup.close();
  });

});




const galleryPopup = new PopupWithForms ("#popup__gallery", (data) =>{
  API.addCard({
    name: data["image-title"],
    link: data["image-link"]
  }).then((cardData)=>{
    const card = new Card (
      cardData.name,
      cardData.link,
      cardData.isLiked,
      cardData._id,
      "#gallery__template",
      openImagePopup,
      handleLikeApi,
      doubleCheck
    );
    const cardElement = card.generateCard();
    section.addItem(cardElement);

    galleryPopup.close();
  });
});

const imagePopup = new PopupWithImage ("#area");
const userInfo = new Userinfo ({
  name: ".profile__name",
  description: ".profile__profession"
});


const section = new Section ({
  items: [], 
  renderer: (item) => {
    const card = new Card(
      item.name,
      item.link,
      item.isLiked,
      item._id,
      "#gallery__template", 
      openImagePopup,
      handleLikeApi,
      doubleCheck
      
    );
    const cardElement = card.generateCard();
    section.addItem(cardElement);
    }
  },
  ".gallery"
);

//Instancia a classe
const imgProfile = new ImgProfile(".profile__image");

//pega o link do fomulario e altera a imagem de perfil
const imgProfilePopup = new PopupWithForms("#popup__image-profile", (data) =>{
  API.editImageProfile({
    link: data["image-link"]
  }).then((userData)=>{
    imgProfile.editImage(userData.avatar);
    imgProfilePopup.close();
  });
});



Promise.all([
  API.getUserInfo(),
  API.getInitialCards()
]).then(([userData, cards]) => {
  userInfo.setUserInfo({
    name: userData.name,
    description: userData.about,
  });
  
  imgProfile.editImage(userData.avatar);

  section.renderItems(cards);
}).catch(() => {});

  
//buttons
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const imgProfileButton = document.querySelector(".profile__image-edit");


//Popup__Elements
const popupName = document.querySelector("#name");
const popupDescription = document.querySelector("#description");
const galleryForm = document.querySelector(".popup__form");


//Expandir imagem
function openImagePopup(title, link, alt){
  imagePopup.open(title, link, alt);
  imagePopup._handleEscClose();
}

// alterar o like no servidor
function handleLikeApi (id, isLiked){
  if (!isLiked){
    API.likedCard(id);
    id = true;
  } else {
    API.disLikedCard(id);
    id = false;
  }
}

function doubleCheck (id, element){
  popupCheck.getValues(id, element);
  popupCheck.open()
}

function handleFormSubmit (id, element){
  API.deleteCard(id).then(() => {
      element.remove(); 
    }).catch((err) => console.log(err))

  popupCheck.close()
  }

  const popupCheck = new PopupWithConfirmation ("#popup__gallery-check", handleFormSubmit);
//profile
editButton.addEventListener("click", () => {
  const data = userInfo.getUserInfo();

  popupName.value = data.name;
  popupDescription.value = data.description;

  profilePopup.open();
});

//Gallery
addButton.addEventListener("click", () =>{ galleryForm.reset();
  galleryPopup.open();
});


//editar avatar
imgProfileButton.addEventListener("click", () =>{
  imgProfilePopup.open();
})

profilePopup.setEventListeners();
galleryPopup.setEventListeners();
imagePopup.setEventListeners();
imgProfilePopup.setEventListeners();
popupCheck.setEventListeners();

