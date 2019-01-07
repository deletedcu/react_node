import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'

import './styles.css'

class ResetPasswordForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      newPassword: '',
      confirmNewPassword: '',
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
      <div className='reset-password-form'>
        {/* Form header */}
        <div className='reset-password-form-header'>
          <div className='reset-password-form-header-title'>
            Forgot Password
          </div>
        </div>

        {/* Form fields */}
        <form className='reset-password-form-inputs' onSubmit={this.onSubmit}>
          <div className='reset-password-form-input'>
            <span>NEW PASSWORD</span>
            <input required type='password' name='newPassword' value={this.state.newPassword} onChange={this.onChange}/>
          </div>

          <div className='reset-password-form-input'>
            <span>CONFIRM NEW PASSWORD</span>
            <input required type='password' name='confirmNewPassword' value={this.state.confirmNewPassword} onChange={this.onChange}/>
          </div>

          <Button className='btn-reset'>CHANGE PASSWORD</Button>

          <div className='reset-password-form-links'>
            <Fragment>
              <Link to='/auth/login'>Log In</Link>
              <div className='div-separator'/>
              <Link to='/auth/signup'>Sign Up</Link>
            </Fragment>
          </div>
        </form>
      </div>
    )
  }
}

export default ResetPasswordForm
