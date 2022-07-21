import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: #333333;
  color: #ffffff;
  padding: 20px;
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterLI = styled.li`
  display: inline-block;
  margin: 0 20px;
  list-style: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #24b26b;
  }
`;

export const Copyright = styled.p`
  font-size: 12px;
  text-align: center;
  padding: 20px 0 0 0;
  margin: 0;
`;