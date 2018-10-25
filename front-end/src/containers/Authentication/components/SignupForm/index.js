import React, { Component } from 'react'
import Button from '../../../../components/Button'
import FacebookButton from '../FacebookButton'

import './styles.css'

class SignupForm extends Component {

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

  render () {
    return (
      <div className='signup-form'>
        {/* Form header */}
        <div className='signup-form-header'>
          <div className='signup-form-title'>
            Create an account
          </div>
          <div className='signup-form-switch'>
            or <span className='span-link'>login</span>
          </div>
        </div>

        {/* Form fields */}
        <form className='signup-form-inputs'>
          <div className='signup-form-input'>
            <div className='signup-form-input-name'>Email</div>
            <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
          </div>

          <div className='signup-form-input'>
            <div className='signup-form-input-name'>Create Password</div>
            <input required type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder='6 characters or more'/>
          </div>

          <div className='signup-form-input'>
            <div className='signup-form-input-name'>Zip</div>
            <input required name='zip' value={this.state.zip} onChange={this.onChange}/>
          </div>

          <Button className='btn-continue' onClick={this.onContinue}>CONTINUE</Button>
        </form>

        {/* Or */}
        <div className='signup-form-separator'>
          <div className='signup-form-separator-line'/>
          <span>OR</span>
          <div className='signup-form-separator-line'/>
        </div>

        {/* Facebook */}
        <FacebookButton className='btn-facebook' onClick={this.onFacebook}/>

        {/* Form footer */}
        <div className='signup-form-footer'>
          By clicking above, you agree to our <span className='span-link'>Terms of Use</span> and consent to our <span className='span-link'>Privacy Policy</span>
        </div>
      </div>
    )
  }
}

export default SignupForm
