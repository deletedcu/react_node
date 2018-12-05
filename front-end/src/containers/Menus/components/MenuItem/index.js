import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import NumericCounter from '../../../../components/NumericCounter'

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'
import { addToCart, removeFromCart } from '../../../../redux/actions/cart'
// import { showNotification } from '../../../../services/notification'

class MenuItem extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showModal(ModalType.menuModal, this.props.item))
  }

  onIncrementPurchasedCount = () => {
    this.props.dispatch(addToCart([this.props.item]))

    // showNotification('Added to cart', 'success')
  }

  onDecrementPurchasedCount = () => {
    this.props.dispatch(removeFromCart(this.props.item))

    // showNotification('Removed from cart', 'info')
  }

  onAddToCart = () => {
    this.props.dispatch(addToCart([this.props.item]))
    
    // showNotification('Added to cart', 'success')
  }

  render () {
    let { item, count } = this.props

    return (
      <div className='div-menu-item'>
        <LazyImage className='img-menu-item clickable' src={ item.main_image } onClick={ this.onShowMenuModal }/>
        
        <div className='div-menu-item-name-description'>
          <div className='div-menu-item-name'>
            { item.name }
          </div>
          <div className='div-menu-item-description'>
            { item.description }
          </div>
        </div>

        <div className='div-menu-item-bottom'>
          <div className='div-menu-item-price'>{ item.display_price }</div>
          <div className='div-numeric-counter'>
            <NumericCounter
              count={ count }
              onIncrement={ this.onIncrementPurchasedCount }
              onDecrement={ this.onDecrementPurchasedCount }
            />
          </div>
          <div className='div-menu-item-add'>
            <div className='btn-add clickable' onClick={ this.onIncrementPurchasedCount }>Add</div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default connect()(MenuItem)
