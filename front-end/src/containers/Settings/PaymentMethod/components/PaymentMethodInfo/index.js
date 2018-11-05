import React, { Component } from 'react'
import Checkbox, { CheckboxType } from '../../../../../components/Checkbox'
import './styles.css'

import imgCard from '../../../../../assets/images/master_card.svg'

class PaymentMethodInfo extends Component {

  render () {
    return (
      <div className='payment-method-info'>
        <img className='img-card' src={imgCard} alt='card'/>

        <div className='div-card-number-expiry'>
          <div className='div-card-number'>・・・・ 4877</div>
          <div className='div-card-expiry'>Expires 7/2017</div>
        </div>

        <div className='div-remove clickable'>Remove</div>

        <Checkbox type={CheckboxType.square} onCheckChange={ () => {} }/>
      </div>
    )
  }
}

export default PaymentMethodInfo
