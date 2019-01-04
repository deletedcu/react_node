import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import OrderedItem from '../OrderedItem'
import MenuDatePicker from '../MenuDatePicker'

import './styles.css'
import { groupBy } from '../../../../utils'

// import imgPlus from '../../../../assets/images/plus_green_thin.svg'

class OrderSummary extends Component {

  totalPrice = 0

  constructor (props) {
    super(props)

    this.state = {
      showPromoCode: false,
      promoCode: '',
      deliveryDate: props.deliveryDate,
    }
  }

  componentDidMount () {
    this.props.onRef(this)
  }

  componentWillUnmount () {
    this.props.onRef(undefined)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDateChange = (date) => {
    this.setState({
      deliveryDate: date,
    }, () => {
      this.onDateChange(date)
    })
  }

  onTogglePromoCode = () => {
    this.setState({
      showPromoCode: !this.state.showPromoCode,
    })
  }

  onApplyPromoCode = () => {

  }

  render () {
    const cartItems = this.props.cart.items
    this.totalPrice = cartItems.reduce((sum, cartItem) => {
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
              <MenuDatePicker onSelectDeliveryDate={this.onDateChange}/>
          </div>
          <div className='order-summary-info-block'>
            <span>6 Meals Per Week</span>
            <span className='span-light-gray'>{`$${this.totalPrice.toFixed(2)}`}</span>
          </div>
          <div className='order-summary-info-block'>
            <span>Shipping</span>
            <span className='span-light-gray'>Free</span>
          </div>
          {/* <div className='order-summary-info-block-highlighted'>
            <span>CHRISTMAS18</span>
            <span>-$25.00</span>
          </div> */}

          {/* Promo Code Input */}
          <div className='order-summary-promo-switch clickable' onClick={this.onTogglePromoCode}>
            {/* <img className={classNames({'img-rotated': this.state.showPromoCode})} src={imgPlus} alt='switch'/> */}
            <span className={classNames({'span-highlighted': !this.state.showPromoCode})}>Add Gift Card or Promo Code</span>
          </div>

          { this.state.showPromoCode &&
            <div className='order-summary-promo-input'>
              <input type='text' placeholder='Enter Code' name='promoCode' value={ this.state.promoCode } onChange={ this.onChange }/>
              <span className={ classNames('clickable', {'span-apply-active': this.state.promoCode }) } onClick={ this.onApplyPromoCode }>APPLY</span>
            </div>
          }

          {/* Separator */}
          <div className='order-summary-separator-green'/>

          {/* Total Price */}
          <div className='order-summary-total-price-block'>
            <span>Total</span>
            <span>{`$${this.totalPrice.toFixed(2)}`}</span>
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
