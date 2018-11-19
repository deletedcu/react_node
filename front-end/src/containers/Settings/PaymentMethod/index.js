import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import PaymentMethodInfo from './components/PaymentMethodInfo'
import './styles.css'

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
          <PaymentMethodInfo underline={true}/>
          <PaymentMethodInfo underline={true}/>
          <PaymentMethodInfo underline={false}/>
        </div>

        {/* Save button */}
        <div className='div-add-card'>
          <Button className='btn-add-card' onClick={ this.onAddCard }>Add Credit/Debit Card</Button>
        </div>
      </div>
    )
  }
}

export default connect()(PaymentMethod)
