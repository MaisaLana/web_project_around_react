export default function Card(props){
    const {name, link, isLiked} = props.card;
    return(
        
            <div className="gallery__item">
                <span className="delete material-symbols-rounded"> delete </span>
                <img 
                className="gallery__image" 
                src={link} alt={name}
                onClick={() => props.onCardClick(props.card)

                } />
                <div className="gallery__image-item">
                    <span className="gallery__image-name">{name}</span>
                    <span className="gallery__image-like material-symbols-outlined">favorite</span>
                </div>
                
            </div>
      
    )
}