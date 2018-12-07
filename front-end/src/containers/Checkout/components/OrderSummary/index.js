import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import OrderedItem from '../OrderedItem'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import './styles.css'
import { groupBy } from '../../../../utils'

import imgDownTriangle from '../../../../assets/images/black_triangle.svg'

class OrderSummary extends Component {

  constructor (props) {
    super(props)

    this.state = {
      promoCode: '',
      deliveryDate: new Date(),
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDateChange = (date) => {
    this.setState({
      deliveryDate: date,
    })
  }

  onApplyPromoCode = () => {

  }

  render () {
    const { deliveryDate } = this.state
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
        </div>

        {/* Separator */}
        <div className='order-summary-separator-gray'/>

        {/* Information */}
        <div className='order-summary-info'>
          {/* Date / Price Info */}
          <div className='order-summary-info-block'>
            <span>Delivery Day</span>
            <DatePicker
              className='delivery-datepicker clickable'
              selected={deliveryDate}
              onChange={this.onDateChange}
              customInput={<div><span>{moment(deliveryDate).format('dddd, MMMM D')}</span><img src={imgDownTriangle} alt='down'/></div>}
            />
          </div>
          <div className='order-summary-info-block'>
            <span>6 Meals Per Week</span>
            <span>{`$${totalPrice.toFixed(2)}`}</span>
          </div>
          <div className='order-summary-info-block'>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className='order-summary-info-block-highlighted'>
            <span>CHRISTMAS18</span>
            <span>-$25.00</span>
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
