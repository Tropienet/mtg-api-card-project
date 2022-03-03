

function CardPage(props) {
    const {card} = props;

    function logInfo() {
        console.log(card);
    }

    return(
        <div>
            <p onClick={logInfo}>{card.name}</p>
            <p>{card.manaCost}</p>
        </div>
    ) 
}

export default CardPage;