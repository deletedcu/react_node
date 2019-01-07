import React, { Component } from 'react'
import ResetPasswordForm from '../components/ResetPasswordForm'

import './styles.css'

class ResetPassword extends Component {

  render () {
    return (
      <div className='reset-password-container'>
        {/* Form */}
        <div className='div-reset-password-form'>
          <div className='container'>
            <ResetPasswordForm history={this.props.history}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPassword
