import React, { Component } from 'react'
import { ButtonStyled } from '../styles/GlobalStyles'
import { Logo, NavButtonStyled, NavLi, NavLinkStyled, NavStyled } from '../styles/NavStyles'

const logo = require('../images/logo.png')
export default class Navbar extends Component {
  render() {
    return (
      <NavStyled>
        <Logo src={logo} alt='logo'/>
        <ul>
          <NavLi>
            <NavLinkStyled>job search</NavLinkStyled>
          </NavLi>
          <NavLi>
            <NavLinkStyled>about</NavLinkStyled>
          </NavLi>
          <NavLi>
            <NavLinkStyled>pricing</NavLinkStyled>
          </NavLi>
          <NavLi>
            <NavLinkStyled>contact</NavLinkStyled>
          </NavLi>
          <NavLi>
          <NavButtonStyled style={{backgroundColor: "#ffffff" }}>Log in</NavButtonStyled>
          <NavButtonStyled style={{backgroundColor: "#24B26B", color: "#fff"}}>Try it Free</NavButtonStyled>
          </NavLi>
        </ul>
      </NavStyled>
    )
  }
}
