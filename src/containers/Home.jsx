import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Main from './MainSection'
import SectionJobs from './SectionJobs'

export default class Home extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Main />
      <SectionJobs />
      <Footer />
      </>
    )
  }
}
