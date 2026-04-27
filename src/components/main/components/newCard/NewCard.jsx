export default function NewCard(){
return(
        <form className="popup__form"
            name="card-form"
            id="new-card-form"
            noValidate>
            <div className="popup__items">
                <input 
                    type="text" 
                    id="image-title" 
                    placeholder="Titulo" 
                    className="popup__item"
                    minLength="2"
                    maxLength="30"
                    required
                />
                <span 
                    className="popup__image-title-error"
                    id="card-name-error">

                </span>
            </div>

            <div className="popup__items">
                <input
                type="url"
                id="image-link"
                placeholder="Link de imagem"
                className="popup__item"
                required
                />
                <span 
                    className="popup__image-link-error"
                    id="card-link-error">
                </span>
            </div>
            <button type="submit" className="popup__button">
                Criar
            </button>
          </form>
)
}