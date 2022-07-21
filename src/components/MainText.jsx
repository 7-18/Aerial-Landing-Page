import React, { Component } from 'react'
import { ButtonStyled } from '../styles/GlobalStyles'
import { DivButtonsStyled, H1Styled, MainTextStyled, TextParagraphStyled } from '../styles/MainSectionStyles'

export default class MainText extends Component {
  render() {
    return (
      <MainTextStyled>
        <H1Styled>We support your challenge in new areas.</H1Styled>
        <TextParagraphStyled>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</TextParagraphStyled>
        <DivButtonsStyled>
          <ButtonStyled style={{ backgroundColor: "#24B26B", color: "#fff", padding: "15px 35px" }}>Try it Free</ButtonStyled>
          <ButtonStyled style={{ backgroundColor: "#ffffff", marginLeft: "5px", padding: "15px 35px" }}>Explore</ButtonStyled>
        </DivButtonsStyled>
      </MainTextStyled>
    )
  }
}
