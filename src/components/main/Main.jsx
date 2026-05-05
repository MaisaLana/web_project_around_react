import { useState, useEffect, useContext } from "react";

import avatar from "../../images/avatar.png";
import edit from "../../images/editbutton.png";
import add from "../../images/addbutton.png";
import Vector from "../../images/Vector.png";

import Card from "./components/card/Card";

import Popup from "./components/popup/Popup";
import NewCard from "./components/newCard/NewCard";
import EditProfile from "./components/editProfile/EditProfile";
import EditAvatar from "./components/editAvatar/EditAvatar";
import ImgPopup from "./components/imagePopup/ImagePopup";

import API from "../../utils/Api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main(props) {
  const {currentUser} = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    API.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const newCardPopup = { title: "Novo local", children: <NewCard /> };
  const editProfile = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatar = {
    title: "Alterar a foto do perfil",
    children: <EditAvatar />,
  };

  

  function handleCardClick(card) {
    props.onOpenPopup({
      title: null,
      children: <ImgPopup card={card} />,
    });
  }

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await API.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await API.deleteCard(card._id)
    .then(() => {
      setCards((state) => state.filter((currentCard) =>
      currentCard._id !== card._id
    )
  );
    })
    .catch((error) => console.error(error));
  }

  return (
    <>
      <section className="profile">
        <div className="profile__content">
          <div className="profile__images">
            <img
              className="profile__image"
              src={currentUser?.avatar}
              alt="Foto do perfil"
            />
            <div
              className="profile__image-overlay"
              onClick={() => props.onOpenPopup(editAvatar)}
            ></div>
            <img
              className="profile__image-edit"
              src={Vector}
              alt="Foto do perfil"
              onClick={() => props.onOpenPopup(editAvatar)}
            />
          </div>

          <div className="profile__information">
            <div className="profile__bio">
              <h1 className="profile__name">{currentUser?.name}</h1>
              <span className="profile__profession">{currentUser?.about}</span>
            </div>
            <button
              type="button"
              className="profile__edit-button"
              onClick={() => props.onOpenPopup(editProfile)}
            >
              <img className="profile__edit-icon" src={edit} alt="Editar" />
            </button>
          </div>
        </div>
        <img
          className="profile__add-button"
          src={add}
          alt="Adicionar"
          onClick={() => props.onOpenPopup(newCardPopup)}
        />
      </section>

      <div className="gallery">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </div>

      {props.popup && (
        <Popup onClose={props.onClosePopup} title={props.popup.title}>
          {props.popup.children}
        </Popup>
      )}
    </>
  );
}
