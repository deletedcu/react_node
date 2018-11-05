import React, { Component } from 'react'
import Button from '../../../components/Button'
import Checkbox, { CheckboxType } from '../../../components/Checkbox'
import PaymentMethodInfo from './components/PaymentMethodInfo'
import './styles.css'

class PaymentMethod extends Component {

  onSave = () => {

  }

  render () {
    return (
      <div className='div-payment-methods-container'>
        {/* Form header */}
        <div className='div-form-header'>
          Payment Methods
        </div>

        {/* Form fields */}
        <div className='div-connected-payment-methods'>
          <PaymentMethodInfo/>
          <PaymentMethodInfo/>
          <PaymentMethodInfo/>
          <Checkbox className='chk-add' type={CheckboxType.square} onCheckChange={ () => {} }>&nbsp;&nbsp;Add New Card</Checkbox>
        </div>

        {/* Separator */}
        <div className='div-separator'/>

        {/* Save button */}
        <div className='div-save'>
          <Button className='btn-save' onClick={ this.onSave }>Save</Button>
        </div>
      </div>
    )
  }
}

export default PaymentMethod
