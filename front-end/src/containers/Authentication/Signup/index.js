import React, { Component } from 'react'
import ServiceFeatures from '../components/ServiceFeatures'
import AuthForm, { AuthFormType } from '../components/AuthForm'

import './styles.css'

import imgBackground from '../../../assets/images/bg_login.png'

class Signup extends Component {

  render () {
    return (
      <div className='signup-container'>
        {/* Top description section */}
        <div className='div-signup-description'>
          <div className='div-signup-description-title'>Get Started</div>
          <div className='div-signup-description-text'>Farm-fresh ingredients and delicious recipes delivered weekly to your home</div>
        </div>

        {/* Form section */}
        <div className='container div-signup-form-container'>
          <div className='div-signup-img'>
            <img className='img-background' src={imgBackground} alt='background'/>
          </div>

          <div className='div-signup-form'>
            <AuthForm
              type={AuthFormType.signup}
            />
          </div>
        </div>

        {/* Features section */}
        <ServiceFeatures className='div-signup-features-container'/>
      </div>
    )
  }
}

export default Signup
