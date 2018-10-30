import React, { Component } from 'react'
import { connect } from 'react-redux'
import NumericCounter from '../../../../components/NumericCounter'
import Button from '../../../../components/Button'

import './styles.css'

// import imgGreenStar from '../../../../assets/images/star_green.svg'

import { showMenuModal } from '../../../../redux/actions/menuModal'
import { addToCart, removeFromCart } from '../../../../redux/actions/cart'
import { showNotification } from '../../../../services/notification'

class MenuItem extends Component {

  onShowMenuModal = () => {
    if (this.props.item.type === 'menu') {
      this.props.dispatch(showMenuModal(this.props.item))
    } else {
      this.props.onSelectMealPlan(this.props.item)
    }
  }

  onIncrementPurchasedCount = () => {
    this.props.dispatch(addToCart([this.props.item]))

    showNotification('Added to cart', 'success')
  }

  onDecrementPurchasedCount = () => {
    this.props.dispatch(removeFromCart(this.props.item))

    showNotification('Removed from cart', 'info')
  }

  onAddToCart = () => {
    this.props.dispatch(addToCart([this.props.item]))
    
    showNotification('Added to cart', 'success')
  }

  render () {
    return (
      <div className='div-menu-item'>
        <img className='img-menu-item clickable' alt='Placeholder' onClick={ this.onShowMenuModal }/>
        <div className='div-menu-item-name-price'>
          <span>{ this.props.item.name }</span>
          <span className='span-menu-item-price'>{ `$${this.props.item.price}` }</span>
        </div>
        {/* <div className='div-time-rating'>
          <div className='div-time'>
            40-55 min
          </div>
          <div className='div-rating'>
            <img src={imgGreenStar} alt='star'/>
            <span>4.5 (200)</span>
          </div>
        </div> */}
        { this.props.item.type === 'menu' &&
          <div className='div-numeric-counter'>
            <NumericCounter
              count={ this.props.count }
              onIncrement={ this.onIncrementPurchasedCount }
              onDecrement={ this.onDecrementPurchasedCount }
            />
          </div>
          // :
          // <div className='div-add-to-cart'>
          //   <Button onClick={ this.onAddToCart }>Add To Cart</Button>
          // </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(MenuItem)
