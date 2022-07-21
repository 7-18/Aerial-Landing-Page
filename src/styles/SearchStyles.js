import styled from "styled-components";
import { GrSearch } from "react-icons/gr";

export const DivSearchStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
`;

export const SearchTitleStyled = styled.h2`
  font-weight: 400;
  font-size: 32px;
  text-align: justify;
`;

export const InputSearchStyled = styled.input`
  height: 40px;
  width: 382px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  padding: 0px 40px;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

export const SvgIcon = styled(GrSearch)`
  position: absolute;
  opacity: 0.6;
  width: 20px;
  height: 20px;
  left: 450px;
  bottom: 10px;
`;
