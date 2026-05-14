import { useState, useEffect } from "react";

import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

import API from "../utils/Api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

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

  useEffect(() => {
    (async () => {
      await API.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await API.editProfile(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await API.editImageProfile(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

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
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
      })
      .catch((error) => console.error(error));
  }

  function handleCardClick(card) {
    props.onOpenPopup({
      title: null,
      children: <ImgPopup card={card} />,
    });
  }

  function handleOpenPopup(popupSelected) {
    setPopup(popupSelected);
  }

  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
      <div className="page">
        <Header />
        <Main
          popup={popup}
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          onUpdateAvatar={handleUpdateAvatar}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
