export default function EditAvatar(){
    return(      
          <form 
            className="popup__form popup__form-img-profile"
            name="avatar-form"
            id="new-avatar-form"
            noValidate>
            <div className="popup__items">
            <input
              type="url"
              id="image-link"
              placeholder="Link de imagem"
              className="popup__item"
              required
            />
            <span className="popup__image-link-error" id="avatar-link-error"></span>
            </div>
            <button type="submit" className="popup__button">Salvar</button>
          </form>
        )
}