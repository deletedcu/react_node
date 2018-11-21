import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import FacebookButton from '../FacebookButton'

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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  componentWillReceiveProps ({ user }) {
    if (this.props.user.user !== user.user && user.loggedIn) {
      if (this.props.type === AuthFormType.login) {
        this.props.history.push('/home')
      } else {
        this.props.history.push('/menus')
      }
    }
  }

  login = () => {
    this.props.dispatch(loginUser(this.state.email, this.state.password))
  }

  signup = () => {
    this.props.dispatch(signupUser({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
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

  render () {
    const isSignup = this.props.type === AuthFormType.signup

    return (
      <div className='auth-form'>
        {/* Form header */}
        <div className={ isSignup ? 'auth-form-header-normal' : 'auth-form-header-green'}>
          <div className='auth-form-title'>
            { isSignup ? 'Create an account' : 'Login' }
          </div>

          { 
            isSignup && 
            <div className='auth-form-switch'>
              or <Link to='/auth/login'><span className='span-link' onClick={ this.onSwitchToLogin }>login</span></Link>
            </div>
          }
        </div>

        {/* Form fields */}
        <form className='auth-form-inputs'>
          { 
            isSignup &&
            <div className='auth-form-double-inputs'>
              <div id='input_firstname' className='auth-form-input'>
                <div className='auth-form-input-name'>First Name</div>
                <input required type='text' name='firstName' value={this.state.firstName} onChange={this.onChange}/>
              </div>
              <div id='input_lastname' className='auth-form-input'>
                <div className='auth-form-input-name'>Last Name</div>
                <input required type='text' name='lastName' value={this.state.lastName} onChange={this.onChange}/>
              </div>
            </div>
          }

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>Email</div>
            <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
          </div>

          <div className='auth-form-input'>
            <div className='auth-form-input-name'>Create Password</div>
            <input required type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder='6 characters or more'/>
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
        <FacebookButton
          callback={this.responseFacebook}
        />

        {/* Form footer */}
        <div className='auth-form-footer'>
          By clicking above, you agree to our <Link to='/terms-of-service'><span className='span-link'>Terms of Use</span></Link> and consent to our <Link to='/terms-of-service'><span className='span-link'>Privacy Policy</span></Link>
          
          { 
            !isSignup &&
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
  }
}

export default connect(mapStateToProps)(AuthForm)
