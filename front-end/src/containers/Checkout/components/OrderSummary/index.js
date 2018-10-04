import React, { Component } from 'react'
import classNames from 'classnames'
import OrderedItem from '../OrderedItem'

import './styles.css'

import imgItem from '../../../../assets/images/ordered_item_placeholder.png'

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

  render () {
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
            <span>$59.99</span>
          </div>
          <div className='order-summary-info-block'>
            <span>Shipping</span>
            <span>Free</span>
          </div>

          {/* Promo Code Input */}
          <div className='order-summary-promo-input'>
            <input type='text' placeholder='Add a promo or gift code' name='promoCode' value={ this.state.promoCode } onChange={ this.onChange }/>
            <span className={ classNames('clickable', {'span-apply-active': this.state.promoCode }) }>APPLY</span>
          </div>

          {/* Separator */}
          <div className='order-summary-separator-green'/>

          {/* Total Price */}
          <div className='order-summary-total-price-block'>
            <span>Total</span>
            <span>$59.99</span>
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
            <OrderedItem
              image={ imgItem }
              title='English Breakfast'
              count='x3'
            />
            <OrderedItem
              image={ imgItem }
              title='BBQ Steak Bites'
              count='x5'
            />
          </div>
        </div>
      </div>
    )
  }
}

export default OrderSummary
