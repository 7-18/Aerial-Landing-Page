import styled from "styled-components";

export const MainStyled = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 550px));
  margin-top: 0;
  padding: 20px 100px 40px;
`;

export const MainTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 100px 0 0;
`;

export const H1Styled = styled.h1`
  font-size: 56px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 40px;
    width: 100%;
  }
`;

export const TextParagraphStyled = styled.p`
  padding: 20px 0 30px;
  line-height: 1.5;
  opacity: 0.9;
`;

export const DivButtonsStyled = styled.div`
  display: flex;
`;
