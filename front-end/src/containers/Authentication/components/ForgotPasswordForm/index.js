import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import FacebookButton from '../..//components/FacebookButton'

import './styles.css'

class ForgotPasswordForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      resetRequested: false,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onBack = () => {
    this.setState({
      resetRequested: false,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    
    this.setState({
      resetRequested: true,
    })
  }

  render () {
    const { resetRequested } = this.state

    return (
      <div className='forgot-password-form'>
        {/* Form header */}
        <div className='forgot-password-form-header'>
          <div className='forgot-password-form-header-title'>
            { resetRequested ? 'Log In' : 'Forgot Password' }
          </div>
        </div>

        {/* Form fields */}
        <form className='forgot-password-form-inputs' onSubmit={this.onSubmit}>
          { resetRequested ?
            <div className='forgot-password-form-instruction-bold'>An email has been sent with instructions on how to reset your password.</div>
            :
            <div className='forgot-password-form-instruction'>Enter the email address associated with your account, and we'll email you a link to reset your password.</div>
          }

          { resetRequested ?
            <div className='forgot-password-help-link'>
              Didn't get the email? Try these <Link to='/help-center'>tips from our Help Center.</Link>
            </div>
            :
            <div className='forgot-password-form-input'>
              <span>EMAIL</span>
              <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
            </div>
          }

          { resetRequested ?
            <Fragment>
              <Button className='btn-reset' onClick={this.onBack}>BACK</Button>
              <FacebookButton/>
            </Fragment>
            :
            <Button className='btn-reset'>SEND RESET INSTRUCTIONS</Button>
          }

          <div className='forgot-password-form-links'>
            { resetRequested ?
            <Link to='/forgot-password'>Help, I forgot my login details</Link>
            :
            <Fragment>
              <Link to='/auth/login'>Log In</Link>
              <div className='div-separator'/>
              <Link to='/auth/signup'>Sign Up</Link>
            </Fragment>
            }
          </div>
        </form>
      </div>
    )
  }
}

export default ForgotPasswordForm
