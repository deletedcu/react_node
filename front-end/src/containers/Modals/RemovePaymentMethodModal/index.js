import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'

class RemovePaymentMethodModal extends Component {

  onRemovePaymentMethod = () => {
    // TODO

    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }
  
  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='remove-payment-modal' onClick={(e)=>e.stopPropagation()}>
          {/* Header */}
          <div className='remove-payment-title'>Remove Payment Method</div>
          <div className='separator'/>

          {/* Question */}
          <div className='order-cancel-questions'>
            Are you sure you want to remove this payment method?
          </div>

          {/* Buttons */}
          <div className='buttons'>
            <Button className='btn-cancel' onClick={this.onRemovePaymentMethod}>Yes, remove</Button>
            <Button className='btn-close' onClick={this.onClose}>No, Cancel</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(RemovePaymentMethodModal)
