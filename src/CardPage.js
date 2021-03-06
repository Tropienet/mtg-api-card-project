import styled from "styled-components";
import magicCardBack from "./images/magicCardBack.jpg";
import HomeNavbar from "./HomeNavbar";

const CardPageContainer = styled.div`
  display: flex;
  background-color: #3a3335;
  height: 100%;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
`;
const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
const CardFrontBack = styled.div`
  display: flex;
`;

const CardImage = styled.img`
  width: auto;
  height: auto;
  min-width: 400px;
  min-height: 400px;
`;

const CardName = styled.h2`
  color: #fdf0d5;
  font-size: 30px;
  align-self: center;
  margin: 25px;
`;

const CardInfoText = styled.p`
  font-size: 20px;
  margin: 10px 0 10px 50px;
`;

const CardFlavor = styled.p`
  font-style: italic;
`;

function CardPage(props) {
  const { card } = props;

  return (
    <>
      <HomeNavbar />
      <CardPageContainer>
        <CardInfoContainer>
          <CardName>{card.name}</CardName>
          <CardInfoText>Card mana cost: {card.manaCost}</CardInfoText>
          <CardInfoText>Combined mana cost: {card.cmc}</CardInfoText>
          <CardInfoText>Card colors:{card.colors}</CardInfoText>
          <CardInfoText>Card type: {card.type}</CardInfoText>
          <CardInfoText>
            Power {card.power} / Toughness {card.toughness}
          </CardInfoText>
          <CardInfoText>
            Set name: {card.setName} ({card.set})
          </CardInfoText>
          <CardInfoText>Printed in sets:</CardInfoText>
          <ul>
            {card.printings.map((setInWhichTheCardWasPrinted) => (
              <li key={setInWhichTheCardWasPrinted} className="printed-sets">
                {setInWhichTheCardWasPrinted}
              </li>
            ))}
          </ul>
          <ul>
            {card.legalities.map((legalityInfo) =>
              legalityInfo.legality === "Legal" ? (
                <li key={legalityInfo.format} className="legal">
                  {legalityInfo.format} : {legalityInfo.legality}
                </li>
              ) : (
                <li key={legalityInfo.legality} className="restricted">
                  {legalityInfo.format} : {legalityInfo.legality}
                </li>
              )
            )}
          </ul>
        </CardInfoContainer>
        <CardImageContainer>
          <CardFrontBack>
            <CardImage src={card.imageUrl} alt={card.imageUrl}></CardImage>
            <CardImage
              src={magicCardBack}
              alt="The back side of a magic the gathering card"
            ></CardImage>
          </CardFrontBack>
          <p>{card.artist}</p>
          {card.flavor && <CardFlavor>{card.flavor}</CardFlavor>}
          <p>{card.originalText}</p>
        </CardImageContainer>
      </CardPageContainer>
    </>
  );
}

export default CardPage;
