import React, { Component } from 'react'
import Partners from '../components/Partners'
import Search from '../components/Search'
import { DivJobs } from '../styles/JobsStyles'

export default class  extends Component {
  render() {
    return (
      <DivJobs>
        <Partners />
        <Search />
      </DivJobs>
    )
  }
}
