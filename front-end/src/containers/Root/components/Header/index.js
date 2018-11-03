import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../../components/Button'
import Cart from './components/Cart'
import SettingsDropdown from './components/SettingsDropdown'

import './styles.css'

import imgLogo from '../../../../assets/images/logo.svg'
import imgFlow from '../../../../assets/images/login_flow.svg'
import imgMinimizedFlow from '../../../../assets/images/login_flow_min.svg'

import { logoutUser } from '../../../../redux/actions/user'
import { showNotification } from '../../../../services/notification'

class Header extends Component {

  onClickLogo = () => {
    this.props.history.push('/home')
  }

  onSignUp = () => {
    this.props.history.push('/auth/signup')
  }

  onLogin = () => {
    this.props.history.push('/auth/login')
  }

  onEditProfile = () => {
    this.props.history.push('/settings/edit_profile')
  }

  onOrderHistory = () => {
    this.props.history.push('/settings/order_history')
  }

  onPaymentMethod = () => {
    this.props.history.push('/settings/payment_method')
  }

  onLogout = () => {
    this.props.dispatch(logoutUser())
    this.props.history.replace('/home')

    showNotification('Logged out', 'success')
  }

  render () {
    let { pathName, user, history } = this.props
    
    return (
      <div className='app-header'>
        <img className='img-logo clickable' src={imgLogo} alt='logo' onClick={this.onClickLogo}/>

        { pathName.includes('auth/signup') && <img className='img-flow' src={imgFlow} alt='flow'/> }
        { pathName.includes('auth/signup') && <img className='img-min-flow' src={imgMinimizedFlow} alt='flow'/> }
        
        { !pathName.includes('auth') &&
          <div className='div-buttons'>
            { user.loggedIn && 
              <SettingsDropdown
                onEditProfile={ this.onEditProfile }
                onPaymentMethod={ this.onPaymentMethod }
                onOrderHistory={ this.onOrderHistory }
                onLogout={ this.onLogout }
              /> 
            }
            <Cart
              history={ history }
            />
            { !user.loggedIn && <div className='div-signup clickable' onClick={this.onSignUp}>Sign Up</div> }
            { !user.loggedIn && <Button onClick={this.onLogin}>Login</Button> }
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(Header)
