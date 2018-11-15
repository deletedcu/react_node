import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import NumericCounter from '../../../../components/NumericCounter'
import './styles.css'

import { addToCart, removeFromCart, removeAllFromCart } from '../../../../redux/actions/cart'
import { showNotification } from '../../../../services/notification'

class SideCartItem extends Component {


  onIncrementPurchasedCount = () => {
    this.props.dispatch(addToCart([this.props.item]))

    showNotification('Added to cart', 'success')
  }

  onDecrementPurchasedCount = () => {
    this.props.dispatch(removeFromCart(this.props.item))

    showNotification('Removed from cart', 'info')
  }

  onRemove = () => {
    this.props.dispatch(removeAllFromCart(this.props.item))

    showNotification('Removed from cart', 'info')
  }

  render () {
    const { item, count } = this.props
    
    return (
      <div className='side-cart-item'>
        <div className='side-cart-item-content'>
          <LazyImage className='img-item' src={ item.main_image }/>
          <div className='side-cart-item-info'>
            <div className='side-cart-item-title'>{ item.name }</div>
            <div className='side-cart-item-counter-price'>
              <NumericCounter
                count={ count }
                onIncrement={ this.onIncrementPurchasedCount }
                onDecrement={ this.onDecrementPurchasedCount }
              />
              <span className='side-cart-item-price'>{ item.display_price }</span>
            </div>
            <div className='side-cart-item-remove clickable' onClick={ this.onRemove }>Remove</div>
          </div>
        </div>
        
        <div className='side-cart-item-separator'/>
      </div>
    )
  }
}

export default connect()(SideCartItem)
