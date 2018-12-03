import React, { Component } from 'react'
import LazyImage from '../../../components/LazyImage'
import ForgotPasswordForm from '../components/ForgotPasswordForm'

import './styles.css'
import imgBanner from '../../../assets/images/banner.png'

class ForgotPassword extends Component {

  render () {
    return (
      <div className='forgot-password-container'>
        {/* Banner and Title */}
        <div className='div-forgot-password-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
        </div>

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
