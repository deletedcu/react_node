import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

import imgLogo from '../../../../assets/images/logo.svg'

class Header extends Component {
  render () {
    return (
      <div className='app-header'>
        <img className='img-logo' src={imgLogo} alt='logo'/>
        <div className='div-auth-buttons'>
          <div className='div-signup clickable'>Sign Up</div>
          <Button>Login</Button>
        </div>
      </div>
    )
  }
}

export default Header
