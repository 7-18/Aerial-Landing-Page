import React, { Component } from 'react'
import { Copyright, FooterDiv, FooterLI, FooterStyled } from '../styles/FooterStyles'

export default class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <FooterDiv>
            <FooterLI>Log in</FooterLI>
            <FooterLI>About</FooterLI>
            <FooterLI>Contact</FooterLI>
            <FooterLI>Work with us</FooterLI>
        </FooterDiv>
        <Copyright>&copy; All rights reserved. | 2022</Copyright>
      </FooterStyled>
    )
  }
}
