import React, { Component } from 'react'
import { DivPartners } from '../styles/PartnersStyles'

const haree = require('../images/HAREE.png')
const jobqo = require('../images/JOBQO.png')
const perman = require('../images/logo_perman.png')
const jobona = require('../images/logo_jobona.png')
const workctrl = require('../images/logo_workctrl.png')

export default class Partners extends Component {
  render() {
    return (
      <DivPartners>
        <span style={{ opacity: "0.9" }}>Trusted by the world's leading companies</span>
        <img src={haree} alt="haree" />
        <img src={jobqo} alt="jobqo" />
        <img src={perman} alt="perman" />
        <img src={jobona} alt="jobona" />
        <img src={workctrl} alt="workctrl" />
      </DivPartners>
    )
  }
}
