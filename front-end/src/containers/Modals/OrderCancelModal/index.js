import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import './styles.css'

import { closeModal } from '../../../redux/actions/modal'

import imgClose from '../../../assets/images/close_button.svg'

class OrderCancelModal extends Component {

  onCancelOrder = () => {
    // TODO

    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='order-cancel-modal' onClick={(e)=>e.stopPropagation()}>
          {/* Header */}
          <div className='order-cancel-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>
          <div className='order-cancel-title'>Cancel Order</div>
          <div className='separator'/>

          {/* Question */}
          <div className='order-cancel-questions'>
            Are you sure you want to cancel this order?
            <div className='order-cancel-alert'>This action cannot be undone!</div>
          </div>

          {/* Buttons */}
          <div className='buttons'>
            <Button className='btn-cancel' onClick={this.onCancelOrder}>CANCEL ORDER</Button>
            <Button className='btn-close' onClick={this.onClose}>CLOSE</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(OrderCancelModal)
