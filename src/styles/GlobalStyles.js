import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
`;

export const theme = {
  fg: "#24B26B",
  bg: "#fffff",
  dg: "#333333",
};

export const invertTheme = ({ fg, bg, dg }) => ({
  fg: bg,
  bg: dg,
  dg: fg,
});
