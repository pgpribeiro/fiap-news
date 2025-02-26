import './card.css'


const Card = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className='card' onClick={onClick}>
            <div className='cabecalho'>
                <img src={imageUrl} alt={title} />
            </div>
            <div className='rodape'>
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    );
};

export default Card