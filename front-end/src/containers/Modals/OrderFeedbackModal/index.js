import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from 'rc-rate'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'
import { rateOrder } from '../../../services/rateOrder'
import { showNotification } from '../../../services/notification'
import { showOverlaySpinner, hideOverlaySpinner } from '../../../redux/actions/overlaySpinner'

import imgCheck from '../../../assets/images/checkmark.svg'
import imgCheckHighlight from '../../../assets/images/checkmark_highlight.svg'

class OrderFeedbackModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      rate: 0,
      feedback: '',
      replyAllowed: false,
    }
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onChangeRate = (rate) => {
    this.setState({
      rate: rate,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onToggleCheck = () => {
    this.setState({
      replyAllowed: !this.state.replyAllowed,
    })
  }

  onSubmit = () => {
    const { rate, feedback, replyAllowed } = this.state
    const { product_id, order_id } = this.props.modal.data
    const { token } = this.props.user.user

    if (rate === 0 || !feedback) {
      return
    }

    this.props.dispatch(showOverlaySpinner())

    rateOrder(token, {
      product_id: product_id,
      order_id: order_id,
      rate: rate,
      feedback: feedback,
      canReply: replyAllowed,
    }).then(res => {
      this.props.dispatch(hideOverlaySpinner())
      this.props.dispatch(closeModal())
      showNotification('Thanks for your feedback', 'success')
    }).catch(err => {
      this.props.dispatch(hideOverlaySpinner())
      showNotification('Failed to send feedback', 'error')
    })
  }

  render () {
    const { replyAllowed } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='order-feedback-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='order-feedback-header-section'>
            <div className='order-feedback-title'>Order Feedback</div>
            <div className='order-feedback-subtitle'>Let us know how we did! Feedback will be saved for future meals, and used to improve your experience.</div>
            <Rate
              character={<div className='img-star'/>}
              onChange={this.onChangeRate}
            />
          </div>

          <div>
            <textarea className='text-feedback' name='feedback' value={this.state.feedback} onChange={this.onChange} placeholder='Let us know more...'/>
          </div>

          <div className='order-feedback-bottom-section'>
            <div className='order-feedback-check'>
              <img className='clickable' src={replyAllowed ? imgCheckHighlight : imgCheck} alt='check' onClick={this.onToggleCheck}/>
              <div>
                <div className='order-feedback-check-title'>Allow us to reply</div>
                <div className='order-feedback-check-subtitle'>Your email will not be revealed</div>
              </div>
            </div>
            
            <Button className='btn-submit' onClick={this.onSubmit}>Submit</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
    user: state.user,
  }
}

export default connect(mapStateToProps)(OrderFeedbackModal)
