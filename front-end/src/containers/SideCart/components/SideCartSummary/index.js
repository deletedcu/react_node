import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../../../../components/Button'
import RecommendedMenuSlider from '../RecommendedMenuSlider'

import './styles.css'

import imgRecommended from '../../../../assets/images/recommended.svg'

class SideCartSummary extends Component {

  onCheckout = () => {
    this.props.onCheckout()
  }

  render () {
    const { cart, user } = this.props
    const total = cart.items.reduce((sum, cartItem) => {
      return sum + cartItem.price[0]
    }, 0)
    const delivery = 0
    const taxes = 0
    const estimatedTotal = (total + delivery) * (100 + taxes) / 100
    const freeDelivery = total > 25 ? 0 : (25 - total)

    return (
      <div className='side-cart-summary'>
        {/* Separator */}
        <div className='side-cart-summary-separator'/>

        {/* Recommended */}
        <div className='side-cart-summary-recommended'>
          <div className='side-cart-summary-recommended-title'>
            <span>Recommened</span>
            <img src={imgRecommended} alt='recommended'/>
          </div>

          <RecommendedMenuSlider/>
        </div>

        {/* Away from free delivery */}
        <div className='side-cart-summary-free-delivery'>
          { freeDelivery !== 0 ? `$${freeDelivery.toFixed(2)} away from free delivery` : 'Free Delivery'}
        </div>

        {/* Prices */}
        <div className='side-cart-summary-prices'>
          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Subtotal</div>
            <div className='side-cart-summary-price-value'>{`$${total.toFixed(2)}`}</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Delivery</div>
            <div className='side-cart-summary-price-value'>{ delivery > 0 ? `$${delivery}` : 'FREE' }</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Taxes</div>
            <div className='side-cart-summary-price-value'>{ taxes }</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>ESTIMATED TOTAL</div>
            <div className='side-cart-summary-price-value'>{`$${estimatedTotal.toFixed(2)}`}</div>
          </div>
        </div>

        {/* Checkout */}
        <Button className='btn-checkout' onClick={this.onCheckout} style={{visibility: cart.items.length > 0 ? 'visible' : ' hidden' }}>Checkout</Button>

        {/* Separator */}
        
        { !user.loggedIn && 
          <div>
            <div className='side-cart-summary-separator'/>
            <div className='side-cart-summary-bottom-link'>To manage your Mealpost account, <Link to='/auth/login'><span>Log in</span></Link> or <Link to='/auth/signup'><span>Sign up</span></Link> here.</div> 
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(SideCartSummary)
