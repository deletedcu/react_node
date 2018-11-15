import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../../components/Cart'

import './styles.css'

import imgClose from '../../assets/images/close_button.svg'

import { hideSidebar } from '../../redux/actions/sideBar'

class SideCart extends Component {

  onClose = () => {
    this.props.dispatch(hideSidebar())
  }

  render () {
    const { history } = this.props

    return (
      <div className='div-side-cart-container'>
        <div className='div-side-cart-header'>
          <div className='div-side-cart-header-left'>
            <Cart
              history={ history }
              highlighted={ true }
            />
            <span className='div-side-cart-header-title'>YOUR CART</span>
          </div>
          
          <div className='div-side-cart-header-right'>
            <img className='clickable' src={imgClose} alt='close' onClick={ this.onClose }/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SideCart)
