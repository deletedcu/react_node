import React, { Component } from 'react'

import './styles.css'

class FooterTopSectionButton extends Component {

  render () {
    const image = this.props.image
    const title = this.props.title
    const hasSeparator = this.props.hasSeparator

    return (
      <div className='div-footer-top-section-button-container'>
        <div className='div-footer-top-section-button clickable'>
          <img src={image} alt='icon'/>
          <span>{ title }</span>
        </div>
        { hasSeparator ? (<span className='div-footer-top-section-button-separator'>|</span>) : null }
      </div>
    )
  }
}

export default FooterTopSectionButton
