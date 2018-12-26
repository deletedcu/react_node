import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'

import './styles.css'

class ForgotPasswordForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
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
      <div className='forgot-password-form'>
        {/* Form header */}
        <div className='forgot-password-form-header'>
          <div className='forgot-password-form-header-title'>
            Forgot Password
          </div>
        </div>

        {/* Form fields */}
        <form className='forgot-password-form-inputs' onSubmit={this.onSubmit}>
          <div className='forgot-password-form-instruction'>Enter the email address associated with your account, and we'll email you a link to reset your password.</div>
          <div className='forgot-password-form-input'>
            <span>EMAIL</span>
            <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
          </div>

          <Button className='btn-reset'>SEND RESET INSTRUCTIONS</Button>

          <div className='forgot-password-form-links'>
            <Link to='/auth/login'>Log In</Link>
            <div className='div-separator'/>
            <Link to='/auth/signup'>Sign Up</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default ForgotPasswordForm
