import React, { Component } from 'react'
import Button from '../../../../components/Button'
import Cart from './components/Cart'

import './styles.css'

import imgLogo from '../../../../assets/images/logo.svg'

class Header extends Component {

  onClickLogo = () => {
    this.props.history.push('/home')
  }

  render () {
    return (
      <div className='app-header'>
        <img className='img-logo clickable' src={imgLogo} alt='logo' onClick={this.onClickLogo}/>
        <div className='div-buttons'>
          <Cart
            purchasedCount={1}
          />
          <div className='div-signup clickable'>Sign Up</div>
          <Button>Login</Button>
        </div>
      </div>
    )
  }
}

export default Header
