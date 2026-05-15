import { useState } from "react";

export default function NewCard(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlaceSubmit({
      name: name,
      link: link,
    });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="popup__items">
        <input
          type="text"
          id="image-title"
          placeholder="Titulo"
          className="popup__item"
          minLength="2"
          maxLength="30"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__image-title-error" id="card-name-error"></span>
      </div>

      <div className="popup__items">
        <input
          type="url"
          id="image-link"
          placeholder="Link de imagem"
          className="popup__item"
          required
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__image-link-error" id="card-link-error"></span>
      </div>
      <button type="submit" className="popup__button">
        Criar
      </button>
    </form>
  );
}
