import React from 'react'
import ServiceFeatures from '../components/ServiceFeatures'
import AuthForm, { AuthFormType } from '../components/AuthForm'
import LazyImage from '../../../components/LazyImage'

import './styles.css'

import imgBackground from '../../../assets/images/bg_login.png'

const Signup = (props) => {
  return (
    <div className='signup-container'>
      {/* Top description section */}
      <div className='div-signup-description'>
        <div className='div-signup-description-title'>Get Started</div>
        <div className='div-signup-description-text'>Fresh, Chef-Inspired Meals delivered weekly to your home</div>
      </div>

      {/* Form section */}
      <div className='container div-signup-form-container'>
        <div className='div-signup-img'>
          <LazyImage className='img-background' src={imgBackground} disableSpinner={true}/>
        </div>

        <div className='div-signup-form'>
          <AuthForm
            type={ AuthFormType.signup }
            history={ props.history }
          />
        </div>
      </div>

      {/* Features section */}
      <ServiceFeatures className='div-signup-features-container'/>
    </div>
  )
}

export default Signup
