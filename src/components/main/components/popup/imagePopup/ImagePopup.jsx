export default function ImagePopup ({card}){
    return(
        <>
          <img 
          className="popup__image-expand" 
          src={card.link} 
          alt={card.name}
          />
                 
          <span className="popup__image-footer">{card.name}</span>
        </>
      
    )
}