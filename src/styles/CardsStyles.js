import styled from "styled-components";

export const DivCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 20px;
`;

export const CardsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 30px 10px;
  border-radius: 10px;
  background-color: #ffffff;
  filter: drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.2));
`;

export const CardImageStyled = styled.img`
  height: auto;
`;

export const CardTitleStyled = styled.h4`
  font-weight: 600;
  margin: 20px 0 0 0;
`;

export const CardParagraphStyled = styled.p`
  opacity: 0.9;
`;


export const DivCardsJobsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(280px, 300px));
  grid-gap: 20px;
`;

export const CardsJobsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  padding: 20px 5px;
  cursor: pointer;
`;

export const CardParagraphJobsStyled = styled.p`
  padding: 10px;
`;

export const DivIconsStyled = styled.div`
  display: flex;
`;

export const SpanIconsStyled = styled.span`
  font-size: 12px;
  opacity: 0.8;
  margin: 5px 15px;
  display: flex;
  align-items: center;
`;
