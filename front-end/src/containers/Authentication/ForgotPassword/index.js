import React, { Component } from 'react'
import ForgotPasswordForm from '../components/ForgotPasswordForm'

import './styles.css'

class ForgotPassword extends Component {

  render () {
    return (
      <div className='forgot-password-container'>
        {/* Form */}
        <div className='div-forgot-password-form'>
          <div className='container'>
            <ForgotPasswordForm history={this.props.history}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
