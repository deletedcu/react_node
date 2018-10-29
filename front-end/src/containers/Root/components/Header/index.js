import React, { Component } from 'react'
import Button from '../../../../components/Button'
import Cart from './components/Cart'

import './styles.css'

import imgLogo from '../../../../assets/images/logo.svg'
import imgFlow from '../../../../assets/images/login_flow.svg'
import imgMinimizedFlow from '../../../../assets/images/login_flow_min.svg'

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

  render () {
    return (
      <div className='app-header'>
        <img className='img-logo clickable' src={imgLogo} alt='logo' onClick={this.onClickLogo}/>

        { this.props.authMode && <img className='img-flow' src={imgFlow} alt='flow'/> }
        { this.props.authMode && <img className='img-min-flow' src={imgMinimizedFlow} alt='flow'/> }
        
        { !this.props.authMode &&
          <div className='div-buttons'>
            <Cart
              history={ this.props.history }
            />
            <div className='div-signup clickable' onClick={this.onSignUp}>Sign Up</div>
            <Button onClick={this.onLogin}>Login</Button>
          </div>
        }
      </div>
    )
  }
}

export default Header
