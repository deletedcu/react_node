import React, { Component } from 'react'
import Button from '../../components/Button'

import './styles.css'

class ContactUs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

  }

  render () {
    return (
      <div className='div-contact-us-container'>
        {/* Banner and Title */}
        <div className='div-contact-us-banner'>
          <div className='div-contact-us-title'>
            Contact Us
          </div>
        </div>

        {/* Contact Us */}
        <div className='div-contact-us'>
          <div className='container'>
            {/* Title */}
            <div className='div-contact-us-form-title'>
              Get In Touch
            </div>

            {/* Separator Line */}
            <div className='div-contact-us-separator'/>

            {/* Form */}
            <div className='div-contact-us-form'>
              <form onSubmit={ this.onSubmit }>
                <div className='div-contact-us-form-names'>
                  <div className='div-contact-us-form-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text' name='firstName' value={this.state.firstName} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-contact-us-form-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text' name='lastName' value={this.state.lastName} onChange={this.onChange}/></div>
                  </div>
                </div>

                <div className='div-contact-us-form-email'>
                  <div><span>Email Address</span></div>
                  <div><input required type='email' name='email' value={this.state.email} onChange={this.onChange}/></div>
                </div>

                <div className='div-contact-us-form-message'>
                  <div><span>Message</span></div>
                  <div><textarea required name='message' value={this.state.message} onChange={this.onChange}/></div>
                </div>

                <div className='div-contact-us-separator'/>

                <Button className='btn-send-message'>Send Message</Button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactUs
