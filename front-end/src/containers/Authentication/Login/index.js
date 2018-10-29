import React, { Component } from 'react'
import AuthForm, { AuthFormType } from '../components/AuthForm'

import './styles.css'

class Login extends Component {

  onSwitchToSignup = () => {
    this.props.history.push('/auth/signup')
  }

  render () {
    return (
      <div className='login-container'>
        {/* Banner and Title */}
        <div className='div-login-banner'>
          <div className='div-login-title'>
            Get Started
            <div className='div-login-subtitle'>Farm-fresh ingredients and delicious recipes delivered weekly to your home</div>
          </div>
        </div>

        {/* Form */}
        <div className='div-login-form'>
          <div className='container'>
          <AuthForm
            type={ AuthFormType.login }
            onSwitchAuthType={ this.onSwitchToSignup }
            history={ this.props.history }
          />
          </div>
          
        </div>
      </div>
    )
  }
}

export default Login
