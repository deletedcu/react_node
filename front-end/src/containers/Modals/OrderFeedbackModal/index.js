import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from 'rc-rate'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'

import imgClose from '../../../assets/images/close_button.svg'

class OrderFeedbackModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      foodRate: 0,
      deliveryRate: 0,
      specialRequest: '',
    }
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onChangeFoodRate = (rate) => {
    this.setState({
      foodRate: rate,
    })
  }

  onChangeDeliveryRate = (rate) => {
    this.setState({
      deliveryRate: rate,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='order-feedback-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='order-feedback-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='order-feedback-title'>Order Feedback</div>

          <div className='order-feedback-rates'>
            <div className='order-feedback-rate'>
              <div className='order-feedback-rate-title'>How was the food?</div>
              <Rate
                character={<div className='img-star'/>}
                onChange={this.onChangeFoodRate}
              />
            </div>
            <div className='order-feedback-rate'>
              <div className='order-feedback-rate-title'>How was your delivery?</div>
              <Rate
                character={<div className='img-star'/>}
                onChange={this.onChangeDeliveryRate}
              />
            </div>
          </div>

          <div className='order-feedback-special-request'>
            <div className='order-feedback-special-request-title'>Comment</div>
            <textarea name='specialRequest' value={this.state.specialRequest} onChange={this.onChange}></textarea>
            <div className='order-feedback-special-request-hint'>
              * Your feedback is highly appreciated and will help us to improve our ability to serve you and recommend meals you prefer in the future.
            </div>
          </div>

          <div className='div-submit'>
            <Button className='btn-submit' onClick={this.onSubmit}>Submit</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(OrderFeedbackModal)
