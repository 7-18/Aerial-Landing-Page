import React, { Component } from 'react'
import MainCards from '../components/MainCards'
import MainText from '../components/MainText'
import Partners from '../components/Partners'
import { MainStyled } from '../styles/MainSectionStyles'

export default class Main extends Component {
  render() {
    return (
      <>
        <MainStyled>
          <MainText />
          <MainCards />
        </MainStyled>
      </>
    )
  }
}
