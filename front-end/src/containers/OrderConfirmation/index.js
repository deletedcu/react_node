import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

import './styles.css'
import imgConfirm from '../../assets/images/confirm.svg'
import imgShare from '../../assets/images/share.svg'

class OrderConfirmation extends Component {

  onManageOrders = () => {
    this.props.history.push('/home')
  }

  onBackToStore = () => {
    this.props.history.push('/home')
  }

  onShare = () => {
    
  }

  render () {
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
              <div className='div-order-confirm-form-greeting'>Hello, John</div>
              <div className='div-order-confirm-form-description'>Your order is being processed and you should receive a confirmation from us shortly.</div>
              
              <div className='div-order-confirm-form-info-list'>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Order #</span><span className='div-order-confirm-form-info-value'>R912745312</span></div>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Total</span><span className='div-order-confirm-form-info-value'>$135.98</span></div>
                <div className='div-order-confirm-form-info'><span className='div-order-confirm-form-info-title'>Delivery Date</span><span className='div-order-confirm-form-info-value'>November 13, 2018</span></div>
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

export default OrderConfirmation
