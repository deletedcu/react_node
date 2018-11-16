import React, { Component } from 'react'
import Button from '../../../../components/Button'
import RecommendedMenuSlider from '../RecommendedMenuSlider'

import './styles.css'

import imgRecommended from '../../../../assets/images/recommended.svg'

class SideCartSummary extends Component {

  onCheckout = () => {
    this.props.onCheckout()
  }

  render () {
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
          $43.95 away from free delivery
        </div>

        {/* Prices */}
        <div className='side-cart-summary-prices'>
          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Subtotal</div>
            <div className='side-cart-summary-price-value'>$69.98</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Delivery</div>
            <div className='side-cart-summary-price-value'>FREE</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>Taxes</div>
            <div className='side-cart-summary-price-value'>6.98</div>
          </div>

          <div className='side-cart-summary-price'>
            <div className='side-cart-summary-price-title'>ESTIMATED TOTAL</div>
            <div className='side-cart-summary-price-value'>$96.38</div>
          </div>
        </div>

        {/* Checkout */}
        <Button className='btn-checkout' onClick={this.onCheckout}>Checkout</Button>
      </div>
    )
  }
}

export default SideCartSummary
