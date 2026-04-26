import avatar from '../../images/avatar.png';
import edit from '../../images/editbutton.png';
import add from '../../images/addbutton.png';
import Vector from '../../images/Vector.png';

export default function Main() {
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
           <div className="profile__image-overlay"></div>
            <img
            className="profile__image-edit"
            src={Vector}
            alt="Foto do perfil"
          /></div>
          <div className="profile__information">
            <div className="profile__bio">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <span className="profile__profession">Explorador</span>
            </div>
            <button type="button" className="profile__edit-button">
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
        />
      </section>

      <div className="gallery">
      </div>
      </>
      )
}