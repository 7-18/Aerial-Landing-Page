import React, { Component } from 'react'
import { CardImageStyled, CardParagraphStyled, CardsStyled, CardTitleStyled, DivCardsStyled } from '../styles/CardsStyles'
import { persons } from '../data/data'

export default class MainCards extends Component {
  render() {
    return (
      <DivCardsStyled>
        {persons.map((person) => {
          const { name, title, quote, image } = person
          return (
            <CardsStyled>
            <CardImageStyled src={image} alt={name} />
            <CardTitleStyled>{name}</CardTitleStyled>
            <CardTitleStyled style={{ fontWeight: "500", margin: "0 0 20px 0" }}>{title}</CardTitleStyled>
            <CardParagraphStyled>{quote}</CardParagraphStyled>
          </CardsStyled>
          )
        })}
      </DivCardsStyled>
    )
  }
}
