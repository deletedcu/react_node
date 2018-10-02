import React, { Component } from 'react'

import './styles.css'

import imgCart from '../../../../../../assets/images/cart.svg'

class Cart extends Component {

  constructor (props) {
    super(props)

    this.state = {
      purchasedCount: props.purchasedCount,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      purchasedCount: newProps.purchasedCount,
    })
  }

  render () {
    const purchasedCount = this.state.purchasedCount

    return (
      <div className='div-cart clickable'>
        <img className='img-cart' src={imgCart} alt='cart'/>
        { purchasedCount > 0 && <span>{ this.state.purchasedCount }</span> }
      </div>
    )
  }
}

export default Cart
