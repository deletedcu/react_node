import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from 'rc-rate'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'
import { showOverlaySpinner, hideOverlaySpinner } from '../../../redux/actions/overlaySpinner'
import { rateSite } from '../../../services/rateSite'
import { showNotification } from '../../../services/notification'

import imgCheck from '../../../assets/images/checkmark.svg'
import imgCheckHighlight from '../../../assets/images/checkmark_highlight.svg'

class ShareExperienceModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      rate: 0,
      feedback: '',
      replyAllowed: false,
      shared: false,
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
    const { feedback, rate, replyAllowed } = this.state

    if (!feedback || rate === 0) {
      return
    }

    this.props.dispatch(showOverlaySpinner())

    rateSite(this.props.user.user.token, {
      feedback: feedback,
      canReply: replyAllowed,
      rate: rate,
    }).then(res => {
      this.props.dispatch(hideOverlaySpinner())
      showNotification('Thanks for your feedback', 'success')

      this.setState({
        shared: true,
      })
    }).catch(err => {
      this.props.dispatch(hideOverlaySpinner())
      showNotification('Failed to send feedback', 'error')
    })
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    const { shared, replyAllowed } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='order-feedback-modal' onClick={(e)=>e.stopPropagation()}> 
          { !shared ? 
            <div>
              <div className='order-feedback-header-section'>
                <div className='order-feedback-title'>Share Your Experience</div>
                <div className='order-feedback-subtitle'>Let us know how we did! We value your feedback and will use it to improve your experience.</div>
                <Rate
                  character={<div className='img-star'/>}
                  onChange={this.onChangeRate}
                />
              </div>

              <div>
                <textarea className='text-feedback' name='feedback' value={this.state.feedback} onChange={this.onChange} placeholder='Write your review'/>
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
            :
            <div className='share-success-content'>
              <div className='share-success-title'>Success</div>
              <div className='share-success-subtitle'>Thank you for sharing your feedback! Your review is greatly appreciated.</div>
              <Button className='btn-okay' onClick={this.onClose}>OK</Button>
            </div>
          }
        </div>
      </ModalContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(ShareExperienceModal)
