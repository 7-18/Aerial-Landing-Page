import React, { Component } from 'react'
import { ButtonStyled } from '../styles/GlobalStyles'
import { DivSearchStyled, InputSearchStyled, SearchTitleStyled, SvgIcon, } from '../styles/SearchStyles'
import { TextParagraphStyled } from '../styles/MainSectionStyles'
import Cards from './Cards'
import { jobs } from '../data/data'
import { DivCardsJobsStyled } from '../styles/CardsStyles'

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: '',
      totalJobs: jobs
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
    const { search } = this.state
    const { totalJobs } = this.state
    const filteredJobs = totalJobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase()) || job.description.toLowerCase().includes(search.toLowerCase()))
    search === '' ? this.setState({ totalJobs: jobs }) : this.setState({ totalJobs: filteredJobs })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { search } = this.state
    const { totalJobs } = this.state
    const filteredJobs = totalJobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()) || job.location.toLowerCase().includes(search.toLowerCase()) || job.description.toLowerCase().includes(search.toLowerCase()))
    search === '' ? this.setState({ totalJobs: jobs }) : this.setState({ totalJobs: filteredJobs })
  }

  render() {
    return (
      <>
      <DivSearchStyled>
        <SearchTitleStyled>Search for your area of interest</SearchTitleStyled>
        <TextParagraphStyled style={ {padding: "10px 0 20px"} }>Please enter your desired industry, job title, and skills</TextParagraphStyled>
        <form>
          <SvgIcon />
          <InputSearchStyled type="text" placeholder='engineer, Internet and Web Industry' onChange={this.handleChange}/>
          <ButtonStyled style={{ backgroundColor: "#333333", color: "#ffffff", marginLeft: "5px" }} type="submit" onClick={this.handleSubmit}>search</ButtonStyled>
        </form>
      </DivSearchStyled>
      <DivCardsJobsStyled style={{ padding: "0 100px" }}>
      {this.state.totalJobs.map((job) => {
        const { id, description, location, title } = job
        return (
          <Cards
            key={id}
            description={description}
            location={location}
            title={title}
          />
          )
        }
        )}
        </DivCardsJobsStyled>
      </>
    )
  }
}
