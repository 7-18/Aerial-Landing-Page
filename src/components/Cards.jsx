import React, { Component } from 'react'
import { CardParagraphJobsStyled, CardsJobsStyled, DivCardsJobsStyled, DivIconsStyled, SpanIconsStyled } from '../styles/CardsStyles'
import { GrLocation } from 'react-icons/gr'
import { BsBriefcase } from 'react-icons/bs'

export default class Cards extends Component {
  render() {
    return (
      <CardsJobsStyled key={this.props.id}>
        <CardParagraphJobsStyled>{this.props.description}</CardParagraphJobsStyled>
        <DivIconsStyled>
          <SpanIconsStyled><GrLocation size={17} style={{ marginRight: "5px", opacity: "0.7" }} />{this.props.location}</SpanIconsStyled>
          <SpanIconsStyled><BsBriefcase size={17} style={{ marginRight: "5px", opacity: "0.7" }} />{this.props.title}</SpanIconsStyled>
        </DivIconsStyled>
      </CardsJobsStyled>
    )
  }
}
