import React, { Component } from 'react'
import Button from '../../../../components/Button'
import FacebookButton from '../FacebookButton'

import './styles.css'

class AuthForm extends Component {

  constructor (props) {
    super (props)

    this.state = {
      email: '',
      password: '',
      zip: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onContinue = () => {

  }

  onFacebook = () => {
    
  }

  onTermsOfUse = () => {

  }

  onPrivacyPolicy = () => {
    
  }

  render () {
    return (
      <div className='auth-form'>
        {/* Form header */}
        <div className='auth-form-header'>
          <div className='auth-form-title'>
            Create an account
          </div>
          <div className='auth-form-switch'>
            or <span className='span-link'>login</span>
          </div>
        </div>

        {/* Form fields */}
        <form className='auth-form-inputs'>
          <div className='auth-form-input'>
            <div className='auth-form-input-name'>Email</div>
            <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
          </div>

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>Create Password</div>
            <input required type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder='6 characters or more'/>
          </div>

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>Zip</div>
            <input required name='zip' value={this.state.zip} onChange={this.onChange}/>
          </div>

          <Button className='btn-continue' onClick={this.onContinue}>CONTINUE</Button>
        </form>

        {/* Or */}
        <div className='auth-form-separator'>
          <div className='auth-form-separator-line'/>
          <span>OR</span>
          <div className='auth-form-separator-line'/>
        </div>

        {/* Facebook */}
        <FacebookButton className='btn-facebook' onClick={this.onFacebook}/>

        {/* Form footer */}
        <div className='auth-form-footer'>
          By clicking above, you agree to our <span className='span-link' onClick={this.onTermsOfUse}>Terms of Use</span> and consent to our <span className='span-link' onClick={this.onPrivacyPolicy}>Privacy Policy</span>
        </div>
      </div>
    )
  }
}

export default AuthForm
