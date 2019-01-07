import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import './styles.css'

import imgPaypal from '../../../../../assets/images/paypal.svg'
import imgMasterCard from '../../../../../assets/images/mastercard.svg'
import imgVisaCard from '../../../../../assets/images/visacard.svg'
import imgPassword from '../../../../../assets/images/password.svg'
import imgPasswordWhite from '../../../../../assets/images/password_white.svg'

import { showModal, ModalType } from '../../../../../redux/actions/modal'

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

    this.props.dispatch(showModal(ModalType.removePaymentModal))
  }

  render () {
    const { type, isDefault } = this.props
    let image = null
    let passwordImage = null
    let colorClass = ''

    switch (type) {
      case PaymentMethodType.paypal:
        image = imgPaypal
        passwordImage = imgPassword
        colorClass = 'gray'
      break
      case PaymentMethodType.masterCard:
        image = imgMasterCard
        passwordImage = imgPasswordWhite
        colorClass = 'black'
      break
      case PaymentMethodType.visaCard:
        image = imgVisaCard
        passwordImage = imgPasswordWhite
        colorClass = 'blue'
      break
      default:
        image = imgPaypal
        passwordImage = imgPassword
        colorClass = 'gray'
    }

    return (
      <div className={classNames('payment-method-info', 'clickable', colorClass)} onClick={this.onEditPaymentMethod}>
        <div className='div-image-wrapper'>
          <img className={classNames('img-payment-method', {'img-payment-method-long': type === PaymentMethodType.paypal})} src={image} alt='card'/>
          { isDefault && 
            <span>(Default)</span>
          }
        </div>
        
        <div className='div-secret-form'>
          <img className='img-password' src={passwordImage} alt='password'/>
          <span>4877</span>
        </div>
      </div>
    )
  }
}

export default connect()(PaymentMethodInfo)
