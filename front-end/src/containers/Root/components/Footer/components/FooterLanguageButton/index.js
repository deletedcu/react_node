import React, { Component } from 'react'

import './styles.css'

import imgGlobe from '../../../../../../assets/images/globe.svg'

class FooterLanguageButton extends Component {

  render () {
    return (
      <div className='div-footer-language-button-container clickable'>
        <span>Global-English</span>
        <img src={imgGlobe} alt='globe'/>
      </div>
    )
  }
}

export default FooterLanguageButton
