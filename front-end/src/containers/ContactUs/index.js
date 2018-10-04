import React, { Component } from 'react'
import Button from '../../components/Button'

import './styles.css'

class ContactUs extends Component {

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
              <form>
                <div className='div-contact-us-form-names'>
                  <div className='div-contact-us-form-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-contact-us-form-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                </div>

                <div className='div-contact-us-form-email'>
                  <div><span>Email Address</span></div>
                  <div><input required type='email'/></div>
                </div>

                <div className='div-contact-us-form-message'>
                  <div><span>Message</span></div>
                  <div><textarea required /></div>
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
