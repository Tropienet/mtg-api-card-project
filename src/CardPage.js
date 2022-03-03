import styled from "styled-components"

const CardPageContainer = styled.div`
    display: flex;
`

const CardInfoContainer = styled.div`
    width: 60%;
`
const CardImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
`

const CardImage = styled.img`
    width: auto;
    height: auto;
    min-width: 400px;
    min-height: 400px;
`

const CardName = styled.h2`
    font-size: 20px;
`

function CardPage(props) {
    const {card} = props;

  

    return(
        <CardPageContainer>
            <CardInfoContainer>
                <CardName>{card.name}</CardName>
              
             
                <p>Card mana cost: {card.manaCost}</p>
                <p>Combined mana cost: {card.cmc}</p>
                <p>Card colors:{card.colors}</p>
                <p>Card type: {card.type}</p>
                <p>Power {card.power} / Toughness {card.toughness}</p>
                <p>Set name: {card.setName} ({card.set})</p>
                <p>Printed in sets:</p>
                <ul>
                    {card.printings.map((setInWhichTheCardWasPrinted) => (

                            <li key={setInWhichTheCardWasPrinted}>{setInWhichTheCardWasPrinted}</li>    

                    ))}
                </ul>
                {card.legalities.map((legality) => (
                    
                            <p key={legality.format}>{legality.format} {legality.legality}</p>
                      
                    ))}
            </CardInfoContainer>
            <CardImageContainer>
                <CardImage src={card.imageUrl} alt={card.imageUrl}></CardImage>
                <p>{card.artist}</p>
                {card.flavor && 
                    <p>{card.flavor}</p>
                }
                <p>{card.originalText}</p>
            </CardImageContainer>
        </CardPageContainer>
    ) 
}

export default CardPage;