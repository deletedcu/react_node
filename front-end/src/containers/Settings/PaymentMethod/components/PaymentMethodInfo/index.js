import React, { Component } from 'react'
import classNames from 'classnames'
import RadioButton from '../../../../../components/RadioButton'
import './styles.css'

import imgCard from '../../../../../assets/images/master_card.svg'

class PaymentMethodInfo extends Component {

  onCheckChange = (checked) => {

  }

  render () {
    const { underline } = this.props

    return (
      <div className={classNames('payment-method-info', {'payment-method-info-underlined' : underline})}>
        <RadioButton
          // checked={ currentPaymentOption === PaymentOption.stripe }
          onCheckChange={ this.onCheckChange }
        />

        <div style={{display: 'flex'}}>
          <img className='img-card' src={imgCard} alt='card'/>
          <div className='div-card-number-expiry'>
            <div className='div-card-number'>・・・・ 4877</div>
            <div className='div-card-expiry'>Expires 7/2017</div>
          </div>
        </div>
        

        <div className='div-remove clickable'>Remove</div>
      </div>
    )
  }
}

export default PaymentMethodInfo
