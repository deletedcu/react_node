import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'
import imgCardBackground from '../../../../assets/images/card_bg.svg'

class GiftCard extends Component {

  constructor (props) {
    super(props)

    this.state = {
      price: props.price,
    }
  }

  componentWillReceiveProps ({ price }) {
    this.setState({
      price: price,
    })
  }

  onClick = () => {
    this.props.onClick()
  }

  render () {
    const { price } = this.state
    const { selected } = this.props

    return (
      <div className={classNames('gift-card', {'gift-card-selected': selected}, 'clickable', this.props.className)} style={this.props.style} onClick={this.onClick}>
        <img className='gift-card-background' src={imgCardBackground} alt='card'/>
        <div className='gift-card-info'>
          <div className='gift-card-price'><span>{`$${price}`}</span></div>
          <div className='gift-card-title'>Gift Card</div>
        </div>
      </div>
    )
  }
}

export default GiftCard
