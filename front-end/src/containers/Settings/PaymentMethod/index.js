import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import PaymentMethodInfo, { PaymentMethodType } from './components/PaymentMethodInfo'

import './styles.css'
import imgPlus from '../../../assets/images/plus_circle.svg'

import { showModal, ModalType } from '../../../redux/actions/modal'

class PaymentMethod extends Component {

  onAddCard = () => {
    this.props.dispatch(showModal(ModalType.cardInfoModal))
  }

  render () {
    return (
      <div className='div-payment-methods-container'>
        {/* Form fields */}
        <div className='div-connected-payment-methods'>
          <PaymentMethodInfo
            type={ PaymentMethodType.paypal }
          />
          <PaymentMethodInfo
            type={ PaymentMethodType.masterCard }
          />
          <PaymentMethodInfo
            type={ PaymentMethodType.visaCard }
          />
        </div>

        {/* Save button */}
        <div className='div-add-card'>
          <Button className='btn-add-card' onClick={ this.onAddCard }><img src={imgPlus} alt='plus'/><span>Add Credit/Debit Card</span></Button>
        </div>
      </div>
    )
  }
}

export default connect()(PaymentMethod)
