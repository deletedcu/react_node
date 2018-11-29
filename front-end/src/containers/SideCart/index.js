import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../../components/Cart'
import SideCartItem from './components/SideCartItem'
import SideCartSummary from './components/SideCartSummary'

import './styles.css'

import imgClose from '../../assets/images/close_button.svg'

import { hideSidebar } from '../../redux/actions/sideBar'
import { groupBy } from '../../utils'

class SideCart extends Component {

  onCheckout = () => {
    this.props.history.push('/checkout')
  }

  onClose = () => {
    this.props.dispatch(hideSidebar())
  }

  render () {
    const { history, cart } = this.props

    const cartItems = cart.items
    const groupedItems = groupBy(cartItems, 'id')

    let sideCartItems = []
    Object.keys(groupedItems).forEach((id, index) => {
      sideCartItems.push(
        <SideCartItem
          key={ index }
          item={ groupedItems[id][0] }
          count={ groupedItems[id].length }
        />
      )
    })

    return (
      <div className='div-side-cart-container'>
        {/* SideBar Header */}
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

        {/* Cart Items */}
        <div className='div-side-cart-items'>
          { sideCartItems }
        </div>

        {/* Sidebar bottom - Cart summary / checkout */}
        <div className='div-side-cart-bottom'>
          <SideCartSummary
            onCheckout={this.onCheckout}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(SideCart)
