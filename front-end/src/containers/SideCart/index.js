import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Cart from '../../components/Cart'
import SideCartItem from './components/SideCartItem'
import SideCartSummary from './components/SideCartSummary'

import './styles.css'

import imgEmptyCart from '../../assets/images/empty_cart.svg'

import { hideSidebar } from '../../redux/actions/sideBar'
import { groupBy } from '../../utils'
import { emptyCart } from '../../redux/actions/cart';

class SideCart extends Component {

  onCheckout = () => {
    this.props.history.push('/checkout')
  }

  onClose = () => {
    this.props.dispatch(hideSidebar())
  }

  onClearAll = () => {
    this.props.dispatch(emptyCart())
  }

  render () {
    const { history, cart } = this.props

    const cartItems = cart.items
    const groupedItems = groupBy(cartItems, 'id')
    const isCartEmpty = cartItems.length === 0;

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
        <div className={classNames('div-side-cart-header', {'div-side-cart-header-no-border': isCartEmpty})}>
          { !isCartEmpty &&
            <Cart
              history={ history }
              // highlighted={ true }
            />
          }
          { !isCartEmpty && <span className='div-side-cart-header-title'>YOUR CART</span> }
        </div>

        {/* Clear All button */}
        { !isCartEmpty &&
        <div className='div-clear-all clickable' onClick={this.onClearAll}>Clear All</div>
        }

        {/* Cart Items Or Show Empty Cart */}
        { isCartEmpty ? 
        <div className='div-side-cart-empty'>
          <img className='img-empty-cart' src={imgEmptyCart} alt='empty'/>
          <span className='span-empty-title'>Your cart is empty</span>
          <span className='span-empty-subtitle'>Add items to get started</span>
        </div>
        :
        <div className='div-side-cart-items-container'>
          <div className='div-side-cart-items'>
            { sideCartItems }
          </div>
        </div>
        }

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
