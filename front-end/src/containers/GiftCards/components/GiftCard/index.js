import React, { Component } from 'react'
import classNames from 'classnames'
import AutosizeInput from 'react-input-autosize'

import './styles.css'
import imgCardBackground from '../../../../assets/images/card_bg.svg'

class GiftCard extends Component {

  constructor (props) {
    super(props)

    this.state = {
      price: props.price,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { selected, editable } = this.props

    return (
      <div className={classNames('gift-card', {'gift-card-selected': selected}, 'clickable', this.props.className)} style={this.props.style} onClick={this.props.onClick}>
        <img className='gift-card-background' src={imgCardBackground} alt='card'/>
        <div className='gift-card-info'>
          <div className='gift-card-price'><span>$<AutosizeInput type='number' name='price' value={this.state.price} onChange={this.onChange} readOnly={!editable}/></span></div>
          <div className='gift-card-title'>Gift Card</div>
        </div>
      </div>
    )
  }
}

export default GiftCard
