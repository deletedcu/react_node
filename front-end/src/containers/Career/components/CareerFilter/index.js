import React, { Component } from 'react'
import './styles.css'

import imgDownArrow from '../../../../assets/images/down_arrow.svg'

class CareerFilter extends Component {

  render () {
    const { type } = this.props

    return (
      <div className='career-filter clickable'>
        <span>{type}</span>
        <img src={imgDownArrow} alt='arrow' />
      </div>
    )
  }
}

export default CareerFilter
