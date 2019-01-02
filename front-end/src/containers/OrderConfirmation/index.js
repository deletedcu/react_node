import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import qs from 'querystring'
import { connect } from 'react-redux'
import moment from 'moment'

import './styles.css'
import imgConfirm from '../../assets/images/confirm.svg'
import imgShare from '../../assets/images/share.svg'

class OrderConfirmation extends Component {

  constructor (props) {
    super(props)

    let queryParams = qs.parse(this.props.location.search.replace('?', ''))

    this.state = {
      deliveryDate: queryParams.delivery_date || '',
      orderId: queryParams.order_id || '',
      totalPrice: queryParams.total_price || '',
    }
  }

  onManageOrders = () => {
    this.props.history.push('/settings/order_history')
  }

  onBackToStore = () => {
    this.props.history.push('/home')
  }

  onShare = () => {
    
  }

  render () {
    const { deliveryDate, orderId, totalPrice } = this.state
    const { user } = this.props

    return (
      <div className='div-order-confirm-container'>
        {/* Boxes */}
        <div className='div-order-confirm-boxes'>
          {/* Order Confirmation Form */}
          <div className='div-order-confirm-form'>
            <div className='div-order-confirm-form-header'>
              <img src={imgConfirm} alt='confirm'/>
              <span>Order Confirmed</span>
            </div>
            <div className='div-order-confirm-form-detail'>
              <div className='div-order-confirm-form-greeting'>{`Hello, ${user.user.first_name}`}</div>
              <div className='div-order-confirm-form-description'>Your order is being processed and you should receive a confirmation from us shortly.</div>
              
              <div className='div-order-confirm-form-info-list'>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Order #</span><span className='div-order-confirm-form-info-value'>{orderId}</span></div>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Total</span><span className='div-order-confirm-form-info-value'>{`$${totalPrice}`}</span></div>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Delivery Date</span><span className='div-order-confirm-form-info-value'>{moment(deliveryDate).format('MMMM D, YYYY')}</span></div>
              </div>
          
              <div className='div-order-confirm-form-buttons'>
                <Button className='btn-manage-orders' onClick={this.onManageOrders}>Manage Orders</Button>
                <Button className='btn-back-to-store' onClick={this.onBackToStore}>Back To Store</Button>
              </div>
            </div>
          </div>

          {/* Refer & Share */}
          <div className='div-order-confirm-share'>
            <div className='div-order-confirm-share-title'>Refer Friends & Earn</div>
            <div className='div-order-confirm-share-description'>Ask your friends to signup with your referral code and place an order. Once done, both you and your friend each earn $10 Mealpost Credit.  </div>
            <div className='div-order-confirm-share-code'>
              <div className='div-order-confirm-share-code-title'>YOUR REFERRAL CODE</div>
              <div className='div-order-confirm-share-code-value'>AB1234</div>
            </div>
            <Button className='btn-share' onClick={this.onShare}><img src={imgShare} alt='share'/><span>SHARE NOW</span></Button>
          </div>
        </div>

        {/* Separator */}
        <div className='div-separator'/>

        {/* Help/Contact Instruction */}
        <div className='div-help-container'>
          Need help? Visit the&nbsp;
          <Link to='/help-center'><span>Help Center</span></Link>
          &nbsp;or&nbsp;
          <Link to='/contact-us'><span>Contact Us</span></Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(OrderConfirmation)
