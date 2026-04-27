import imgClose from '../../../../images/closeicon.png';

export default function Popup(props) {
  //children é o conteúdo de popup
  const { onClose, title, children } = props;

  return (
    <div className="popup--active">
      <div 
      className={`${!title ? "popup__image-content" : "popup__container " }`}>
        <button
          aria-label="Close modal"
          className={`${!title ? "popup__image-close" : "popup__button-close" }`}
          type="button"
          onClick={onClose}>
          <img className="popup__close-icon"
            src={imgClose}
            alt="botão para fechar"/> 
        </button>

        {title && (
          <h3 className="popup__title">{title}</h3>
        )}
        {children}
      </div>
    </div>
  );
}