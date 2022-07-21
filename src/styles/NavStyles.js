import styled from "styled-components";
import { ButtonStyled } from "./GlobalStyles";

export const NavStyled = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 6rem;
`;

export const Logo = styled.img`
  weight: 35px;
`;

export const NavLi = styled.li`
  display: inline-block;
  margin: 0 20px;
  list-style: none;
`;

export const NavLinkStyled = styled.a`
  color: #333333;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #24b26b;
  }
`;

export const NavButtonStyled = styled(ButtonStyled)`
  margin-right: 15px;
`;
