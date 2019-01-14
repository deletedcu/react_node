import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import FacebookButton from '../FacebookButton'
import Checkbox, { CheckboxType } from '../../../../components/Checkbox'

import './styles.css'

import { loginUser, signupUser } from '../../../../redux/actions/user'

export const AuthFormType = {
  login: 0,
  signup: 1,
}
class AuthForm extends Component {

  constructor (props) {
    super (props)

    this.state = {
      fullName: '',
      email: '',
      password: '',
      zip: '',
      rememberMe: true,
    }
  }

  componentWillReceiveProps ({ user }) {
    if (this.props.user.user !== user.user && user.loggedIn) {
      if (this.props.type === AuthFormType.login && !this.props.pricing.activated) {
        this.props.history.push('/home')
      } else {
        this.props.history.push('/menus')
      }
    }
  }

  login = () => {
    this.props.dispatch(loginUser(this.state.email, this.state.password, this.state.rememberMe))
  }

  signup = () => {
    this.props.dispatch(signupUser({
      name: this.state.fullName,
      email: this.state.email,
      password: this.state.password,
      zip: this.state.zip,
    }))
  }

  responseFacebook = (response) => {
    console.log(response)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onContinue = (e) => {
    e.preventDefault()

    if (this.props.type === AuthFormType.login) {
      this.login()
    } else {
      this.signup()
    }
  }

  onCheckChange = (checked) => {
    this.setState({
      rememberMe: checked,
    })
  }

  onForgotPassword = () => {
    this.props.history.push('/auth/forgot-password')
  }

  render () {
    const isSignup = this.props.type === AuthFormType.signup

    return (
      <div className={classNames('auth-form', {'auth-form-transparent': isSignup })}>
        {/* Form header */}
        { !isSignup &&
          <div className='auth-form-header'>
            <div className='auth-form-title'>
              { 'Log In' }
            </div>
          </div>
        }

        {/* Form fields */}
        <form className='auth-form-inputs'>
          {
            isSignup &&
            <div className='auth-form-input'>
              <div className='auth-form-input-name'>FULL NAME</div>
              <input required type='text' name='fullName' value={this.state.fullName} onChange={this.onChange}/>
            </div>
          }

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>EMAIL</div>
            <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
          </div>

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>{ isSignup ? 'CREATE A PASSWORD' : 'PASSWORD' }</div>
            <input required type='password' name='password' value={this.state.password} onChange={this.onChange}/>
          </div>

          { isSignup &&
            <div className='auth-form-input'>
              <div className='auth-form-input-name'>ZIP</div>
              <input required type='text' name='zip' value={this.state.zip} onChange={this.onChange}/>
            </div>
          }

          { !isSignup && 
            <div className='auth-form-forgot-password'>
              <Checkbox type={CheckboxType.square} checked={this.state.rememberMe} onCheckChange={this.onCheckChange}>Remember Me?</Checkbox>
              <span className='span-forgot-password clickable' onClick={this.onForgotPassword}>Forgot Password?</span>
            </div>
          }

          <Button className='btn-continue' onClick={this.onContinue}>CONTINUE</Button>
        </form>

        {/* Or */}
        <div className='auth-form-separator'>
          <div className='auth-form-separator-line'/>
          <span>OR</span>
          <div className='auth-form-separator-line'/>
        </div>

        {/* Facebook */}
        <FacebookButton
          callback={this.responseFacebook}
        />

        {/* Form footer */}
        <div className='auth-form-footer'>
          By clicking above, you agree to our <Link to='/terms-of-service'><span className='span-link'>Terms of Use</span></Link> and consent to our <Link to='/terms-of-service'><span className='span-link'>Privacy Policy</span></Link>
          
          { 
            isSignup ?
            <div className='auth-form-footer-login'>
              Have an account? <Link to='/auth/login'><span className='span-link'>Log In</span></Link>
            </div>
            :
            <div className='auth-form-footer-signup'>
              New to Mealpost? <Link to='/auth/signup'><span className='span-link'>Sign up</span></Link>
            </div>
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    pricing: state.pricing,
  }
}

export default connect(mapStateToProps)(AuthForm)
