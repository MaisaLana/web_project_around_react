import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function EditProfile() {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (event) => {
    setName(event.target.value); // Atualiza o nome (name) quando a entrada for alterada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Atualiza a descrição (description) quando a entrada for alterada
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    handleUpdateUser({ name, about: description }); // Atualiza as informações do usuário

  };

  return (
    <form
      className="popup__form"
      name="profile-form"
      id="new-profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="popup__items">
        <input
          type="text"
          id="name"
          placeholder="Nome"
          className="popup__item"
          minLength="2"
          maxLength="40"
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__name-error" id="profile-name-error"></span>
      </div>

      <div className="popup__items">
        <input
          type="text"
          id="description"
          placeholder="Descrição"
          className="popup__item"
          minLength="2"
          maxLength="200"
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span
          className="popup__description-error"
          id="profile-description-error"
        ></span>
      </div>
      <button type="submit" className="popup__button">
        Salvar
      </button>
    </form>
  );
}
