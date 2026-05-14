import { useRef } from "react";

export default function EditAvatar({onUpdateAvatar}){

  const avatarRef = useRef();

  const handleSubmit = (e) =>{
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
    console.log(avatarRef.current.value);
  }
    return(      
          <form 
            className="popup__form popup__form-img-profile"
            name="avatar-form"
            id="new-avatar-form"
            noValidate
            onSubmit={handleSubmit}>
            <div className="popup__items">
            <input
              type="url"
              id="image-link"
              placeholder="Link de imagem"
              className="popup__item"
              required
              ref = {avatarRef}
            />
            <span className="popup__image-link-error" id="avatar-link-error"></span>
            </div>
            <button type="submit" className="popup__button">Salvar</button>
          </form>
          
        )
}