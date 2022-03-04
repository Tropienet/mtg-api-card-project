import styled from "styled-components"
import magicCardBack from './images/magicCardBack.jpg'
import HomeNavbar from './HomeNavbar'

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
const CardFrontBack = styled.div`
    display: flex;
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
        <>
            <HomeNavbar />
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
                    <ul>
                    {card.legalities.map((legalityInfo) => (
                        legalityInfo.legality === "Legal" 
                        ? ( <li key={legalityInfo.format} className="legal">{legalityInfo.format} : {legalityInfo.legality}</li>) 
                        : (<li key={legalityInfo.legality} className="restricted">{legalityInfo.format} : {legalityInfo.legality}</li>)
                        ))}
                    </ul>
                </CardInfoContainer>
                <CardImageContainer>
                    <CardFrontBack>
                        <CardImage src={card.imageUrl} alt={card.imageUrl}></CardImage>
                        <CardImage src={magicCardBack} alt="The back side of a magic the gathering card"></CardImage>
                    </CardFrontBack>
                    <p>{card.artist}</p>
                    {card.flavor && 
                        <p>{card.flavor}</p>
                    }
                    <p>{card.originalText}</p>
                </CardImageContainer>
            </CardPageContainer>
        </>
    ) 
}

export default CardPage;