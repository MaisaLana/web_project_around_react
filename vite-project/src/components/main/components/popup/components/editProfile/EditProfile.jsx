export default function EditProfile(){
    return(
          <form 
            className="popup__form"
            name="profile-form"
            id="new-profile-form"
            noValidate>
              <div className="popup__items">
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Nome" 
                  className="popup__item" 
                  minLength="2" 
                  maxLength="40" 
                  required
                />
                <span 
                  className="popup__name-error" 
                  id="profile-name-error">
                </span>
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
                />
                <span 
                className="popup__description-error"
                id="profile-description-error">
                </span>
              </div>
              <button type="submit" className="popup__button">Salvar</button>
          </form>  
    )
}