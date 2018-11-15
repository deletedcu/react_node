import React, { Component } from 'react'
import { connect } from 'react-redux'
import Cart from '../../components/Cart'
import SideCartItem from './components/SideCartItem'

import './styles.css'

import imgClose from '../../assets/images/close_button.svg'

import { hideSidebar } from '../../redux/actions/sideBar'

class SideCart extends Component {

  onClose = () => {
    this.props.dispatch(hideSidebar())
  }

  groupBy = (items, key) => items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [
        ...(result[item[key]] || []),
        item,
      ],
    }), 
    {},
  )

  render () {
    const { history, cart } = this.props

    const cartItems = cart.items
    const totalPrice = cartItems.reduce((sum, cartItem) => {
      return sum + cartItem.price[0]
    }, 0)
    const groupedItems = this.groupBy(cartItems, 'id')

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
