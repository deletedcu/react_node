import React, { Component } from 'react'
import ServiceFeatures from './components/ServiceFeatures'
import SignupForm from './components/SignupForm'

import './styles.css'

import imgBackground from '../../assets/images/bg_login.png'

class Authentication extends Component {

  render () {
    return (
      <div className='div-auth-container'>
        {/* Top description section */}
        <div className='div-auth-description'>
          <div className='div-auth-description-title'>Get Started</div>
          <div className='div-auth-description-text'>Farm-fresh ingredients and delicious recipes delivered weekly to your home</div>
        </div>

        {/* Form section */}
        <div className='container div-auth-form-container'>
          <div className='div-auth-form-half-container'>
            <img className='img-background' src={imgBackground} alt='background'/>
          </div>

          <div className='div-auth-form-half-container'>
            <SignupForm/>
          </div>
        </div>

        {/* Features section */}
        <ServiceFeatures className='div-auth-features-container'/>

        {/* Contact section */}
        <div className='div-auth-help-contact-container'>
          Need help? Visit the&nbsp;
          <span className='clickable' onClick={this.onHelpCenter}>Help Center</span>&nbsp;or&nbsp;
          <span className='clickable' onClick={this.onContactUs}>Contact Us</span>
        </div>
      </div>
    )
  }
}

export default Authentication
