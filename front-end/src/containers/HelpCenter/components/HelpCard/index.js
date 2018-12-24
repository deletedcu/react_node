import React, { Component } from 'react'

import './styles.css'

class HelpCard extends Component {

  render () {
    const { image, title, subtitle } = this.props

    return (
      <div className='help-card'>
        <img className='img-card' src={image} alt='card'/>
        <span className='span-title'>{title}</span>
        <span className='span-subtitle'>{subtitle}</span>
      </div>
    )
  }
}

export default HelpCard
