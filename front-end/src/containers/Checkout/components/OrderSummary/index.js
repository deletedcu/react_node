import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import OrderedItem from '../OrderedItem'

import './styles.css'
import { groupBy } from '../../../../utils'
class OrderSummary extends Component {

  constructor (props) {
    super(props)

    this.state = {
      promoCode: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onApplyPromoCode = () => {

  }

  render () {
    const cartItems = this.props.cart.items
    const totalPrice = cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.price[0]
    }, 0)
    const groupedItems =  groupBy(cartItems, 'id')

    let orderedItems = []
    Object.keys(groupedItems).forEach((id, index) => {
      orderedItems.push(
        <OrderedItem
          key={ index }
          image={ groupedItems[id][0].main_image }
          title={ groupedItems[id][0].name }
          count={ `x${groupedItems[id].length}` }
        />
      )
    })
    

    return (
      <div className='order-summary-container'>
        {/* Header */}
        <div className='order-summary-header'>
          <span className='order-summary-title'>Order Summary</span>
          <span className='order-summary-edit clickable'>edit</span>
        </div>

        {/* Separator */}
        <div className='order-summary-separator-gray'/>

        {/* Information */}
        <div className='order-summary-info'>
          {/* Date / Price Info */}
          <div className='order-summary-info-block'>
            <span>Delivery Day</span>
            <span>Friday, September 14th</span>
          </div>
          <div className='order-summary-info-block'>
            <span>6 Meals Per Week</span>
            <span>{`$${totalPrice.toFixed(2)}`}</span>
          </div>
          <div className='order-summary-info-block'>
            <span>Shipping</span>
            <span>Free</span>
          </div>

          {/* Promo Code Input */}
          <div className='order-summary-promo-input'>
            <input type='text' placeholder='Add a promo or gift code' name='promoCode' value={ this.state.promoCode } onChange={ this.onChange }/>
            <span className={ classNames('clickable', {'span-apply-active': this.state.promoCode }) } onClick={ this.onApplyPromoCode }>APPLY</span>
          </div>

          {/* Separator */}
          <div className='order-summary-separator-green'/>

          {/* Total Price */}
          <div className='order-summary-total-price-block'>
            <span>Total</span>
            <span>{`$${totalPrice.toFixed(2)}`}</span>
          </div>
        </div>

        {/* Separator */}
        <div className='order-summary-separator-green'/>

        {/* Items */}
        <div className='order-summary-items'>
          <div className='order-summary-items-header'>
            <span className='order-summary-items-title'>My Meals</span>
            <span className='order-summary-items-edit clickable'>edit</span>
          </div>
          <div className='order-summary-items-list'>
            { orderedItems }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(OrderSummary)
