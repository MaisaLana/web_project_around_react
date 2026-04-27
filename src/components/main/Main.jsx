import avatar from '../../images/avatar.png';
import edit from '../../images/editbutton.png';
import add from '../../images/addbutton.png';
import Vector from '../../images/Vector.png';

import {useState} from 'react';

import Card from './components/card/Card';

import Popup from './components/popup/Popup';
import NewCard from './components/popup/components/newCard/NewCard';
import EditProfile from './components/popup/components/editProfile/EditProfile';
import EditAvatar from './components/popup/components/editAvatar/EditAvatar';
import ImgPopup from './components/popup/components/imagePopup/ImagePopup';



const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);


export default function Main() {
  const [popup, setPopup] = useState(null);

    const newCardPopup = { title: "Novo local", children: <NewCard /> };
    const editProfile = { title: "Editar perfil", children: <EditProfile /> };
    const editAvatar = { title: "Alterar a foto do perfil", children: <EditAvatar /> };
  
  
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
 
  function handleClosePopup() {
    setPopup(null);
  }

  function handleCardClick(card) {
  setPopup({
    title: null,
    children: <ImgPopup card={card} />
  });
}

    return (
        <>
          <section className="profile">
            <div className="profile__content">
              <div className="profile__images">
                <img
                  className="profile__image"
                  src={avatar}
                  alt="Foto do perfil"
                />
                <div className="profile__image-overlay" onClick={()=> handleOpenPopup(editAvatar) }></div>
                <img
                className="profile__image-edit"
                src={Vector}
                alt="Foto do perfil"
                onClick={()=> handleOpenPopup(editAvatar) }
                />
              </div>
              
              <div className="profile__information">
                <div className="profile__bio">
                  <h1 className="profile__name">Jacques Cousteau</h1>
                  <span className="profile__profession">Explorador</span>
                </div>
                <button 
                type="button" 
                className="profile__edit-button"
                onClick={()=> handleOpenPopup(editProfile)}>
                <img
                  className="profile__edit-icon"
                  src={edit}
                  alt="Editar"
                />
                </button>
              </div>
            </div>
            <img
              className="profile__add-button"
              src={add}
              alt="Adicionar"
              onClick={() => handleOpenPopup(newCardPopup)}
            />
      </section>

      <div className="gallery">
        {cards.map((card) => (
        <Card key={card._id} card={card} onCardClick={handleCardClick}/>
        ))}
      </div>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
      </>

            );


}