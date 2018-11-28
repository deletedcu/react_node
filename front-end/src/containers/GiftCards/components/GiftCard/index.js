import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'
import imgCardBackground from '../../../../assets/images/card_bg.svg'

class GiftCard extends Component {

  render () {
    const { price, selected } = this.props

    return (
      <div className={classNames('gift-card', {'gift-card-selected': selected}, 'clickable', this.props.className)} style={this.props.style} onClick={this.props.onClick}>
        <img className='gift-card-background' src={imgCardBackground} alt='card'/>
        <div className='gift-card-info'>
          <div className='gift-card-price'>{`$${price}`}</div>
          <div className='gift-card-title'>Gift Card</div>
        </div>
      </div>
    )
  }
}

export default GiftCard
