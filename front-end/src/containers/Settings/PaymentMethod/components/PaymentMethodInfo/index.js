import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

import imgPaypal from '../../../../../assets/images/paypal.svg'
import imgMasterCard from '../../../../../assets/images/mastercard.svg'
import imgVisaCard from '../../../../../assets/images/visacard.svg'
import imgPassword from '../../../../../assets/images/password.svg'

export const PaymentMethodType = {
  paypal: 0,
  masterCard: 1,
  visaCard: 2, 
}

class PaymentMethodInfo extends Component {

  onEditPaymentMethod = () => {

  }

  onRemove = (e) => {
    e.stopPropagation()
  }

  render () {
    const { type } = this.props
    let paymentMethodTitle = ''
    let image = null
    let colorClass = ''

    switch (type) {
      case PaymentMethodType.paypal:
        paymentMethodTitle = 'PayPal'
        image = imgPaypal
        colorClass = 'cyan'
      break
      case PaymentMethodType.masterCard:
        paymentMethodTitle = 'Mastercard'
        image = imgMasterCard
        colorClass = 'orange'
      break
      case PaymentMethodType.visaCard:
        paymentMethodTitle = 'VISA'
        image = imgVisaCard
        colorClass = 'blue'
      break
      default:
        paymentMethodTitle = 'PayPal'
        image = imgPaypal
        colorClass = 'cyan'
    }

    return (
      <div className='payment-method-info clickable' onClick={this.onEditPaymentMethod}>
        <div className={classNames('payment-method-info-title', colorClass)}>
          <span>{paymentMethodTitle}</span>
        </div>

        <div className='payment-method-info-content'>
          <div className='div-image-wrapper'>
            <img className={classNames('img-payment-method', {'img-payment-method-long': type === PaymentMethodType.paypal})} src={image} alt='card'/>
          </div>
          
          <div className='div-secret-form'>
            <img className='img-password' src={imgPassword} alt='password'/>
            <img className='img-password' src={imgPassword} alt='password'/>
            { type !== PaymentMethodType.paypal && <img className='img-password' src={imgPassword} alt='password'/> }
            { type !== PaymentMethodType.paypal &&
              <div>
                <span>4877</span>
                <span>07/15</span>
              </div>
            }
            { type === PaymentMethodType.paypal &&
              <span>alexK**@g***.com</span>
            }
          </div>
          
          <span className='span-remove clickable' onClick={this.onRemove}>Remove</span>
        </div>
      </div>
    )
  }
}

export default PaymentMethodInfo
