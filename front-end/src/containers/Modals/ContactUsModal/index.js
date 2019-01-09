import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'
import { closeModal } from '../../../redux/actions/modal'
import { showOverlaySpinner, hideOverlaySpinner } from '../../../redux/actions/overlaySpinner'
import { showNotification } from '../../../services/notification'
import { contact } from '../../../services/contact'

class ContactUsModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      messageSent: false,
      name: '',
      email: '',
      message: '',
    }
  }

  onSendContact = () => {

    const { name, email, message } = this.state

    if (!name || !email || !message) {
      showNotification('Please fill out the form', 'error')
      return
    }
    
    this.props.dispatch(showOverlaySpinner())

    contact({
      name: name,
      email: email,
      message: message,
    }).then(res => {
      this.props.dispatch(hideOverlaySpinner())

      this.setState({
        messageSent: true,
      })
    }).catch(err => {
      this.props.dispatch(hideOverlaySpinner())
      showNotification('Failed to contact the support', 'error')
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }
  
  render () {
    const { messageSent, email, name, message } = this.state

    return (
      <ModalContainer darkMode={true}>
        { 
          !messageSent ?
          <div className='contact-us-modal' onClick={(e)=>e.stopPropagation()}>
            <div className='contact-us-header'>
              <span className='span-title'>Contact Us</span>
              <span className='span-subtitle'>Have a question? We'd love to help!</span>
            </div>

            <div className='contact-us-form'>
              <div className='contact-us-input'>
                <span>NAME</span>
                <input name='name' value={name} type='text' onChange={this.onChange} required/>
              </div>
              <div className='contact-us-input'>
                <span>EMAIL</span>
                <input name='email' value={email} type='email' onChange={this.onChange} required/>
              </div>
              <div className='contact-us-input'>
                <span>MESSAGE</span>
                <textarea name='message' value={message} type='text' onChange={this.onChange} required/>
              </div>
            </div>

            <div className='contact-us-bottom'>
              <Button onClick={this.onSendContact}>SEND</Button>
            </div>
          </div>
          :
          <div className='contact-success-modal' onClick={(e)=>e.stopPropagation()}>
            <span className='span-title'>Success</span>
            <span className='span-description'>Thank you for contacting us! We appreciate that you've taken the time to write us. We'll get back to you very soon. ETA: 15-20 mins.</span>
            <Button onClick={this.onClose}>OK</Button>
          </div>
        }
      </ModalContainer>
    )
  }
}

export default connect()(ContactUsModal)
