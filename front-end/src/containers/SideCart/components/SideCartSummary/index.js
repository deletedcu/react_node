import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '../../../../components/Button'

import './styles.css'
import { endPricingMode } from '../../../../redux/actions/pricing'

class SideCartSummary extends Component {

  onCheckout = () => {
    if (this.props.pricing.activated) {
      this.props.dispatch(endPricingMode())
    }

    this.props.onCheckout()
  }

  render () {
    const { cart, user, pricing } = this.props
    const isCartEmpty = cart.items.length === 0
    const total = cart.items.reduce((sum, cartItem) => {
      return sum + cartItem.price[0]
    }, 0)
    const delivery = 0
    const taxes = 0
    const estimatedTotal = (total + delivery) * (100 + taxes) / 100
    const freeDelivery = total > 25 ? 0 : (25 - total)

    const checkoutAvailable = !isCartEmpty && (!pricing.activated || pricing.mealCount === cart.items.length)
    const mealCountDifference = pricing.mealCount - cart.items.length

    return (
      <div className='side-cart-summary'>
        {/* Separator */}
        <div className='side-cart-summary-separator'/>

        {/* Recommended */}
        {/* <div className='side-cart-summary-recommended'>
          <div className='side-cart-summary-recommended-title'>
            <span>Recommened</span>
            <img src={imgRecommended} alt='recommended'/>
          </div>

          <RecommendedMenuSlider/>
        </div> */}

        {/* Meal preference link */}
        <div className='side-cart-summary-preferences'>
          <Link to='/settings/meal_preference'>
            Meal Preferences
          </Link>
        </div>

        {/* Away from free delivery */}
        <div className='side-cart-summary-free-delivery'>
          { freeDelivery !== 0 ? `$${freeDelivery.toFixed(2)} away from free delivery` : 'Free Delivery'}
        </div>

        {/* Prices */}
        { checkoutAvailable &&
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
        }

        {/* Checkout */}
        { checkoutAvailable &&
          <Button className='btn-checkout' onClick={this.onCheckout}>Checkout</Button>
        }

        {/* Separator */}
        <div className='side-cart-summary-separator' style={{visibility: user.loggedIn ? 'hidden' : 'visible'}}/>
        
        {/* Login/Signup */}
        { !user.loggedIn && 
          <div className='side-cart-summary-bottom-link'>To manage your Mealpost account, <Link to='/auth/login'><span>Log in</span></Link> or <Link to='/auth/signup'><span>Sign up</span></Link> here.</div> 
        }

        {/* Pricing mode instruction text */}
        {
          pricing.activated && !checkoutAvailable &&
          <div className='side-cart-summary-pricing-instruction'>
            <div className='side-cart-summary-separator'/>
            { mealCountDifference > 0 ? `Please add ${mealCountDifference} meal to continue` : `Please remove ${-mealCountDifference} meal to continue` }
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
    pricing: state.pricing,
  }
}

export default connect(mapStateToProps)(SideCartSummary)
