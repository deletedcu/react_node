import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from 'rc-rate'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'

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
    this.props.dispatch(closeModal())
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

export default connect()(OrderFeedbackModal)
