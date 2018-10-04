import React, { Component } from 'react'

import './styles.css'

class Checkout extends Component {

  onHelpCenter = () => {

  }

  onContactUs = () => {
    this.props.history.push('/contact-us')
  }

  render () {
    return (
      <div className='div-checkout-container'>
        {/* Title */}
        <div className='div-checkout-title'>
          Checkout
        </div>

        {/* Checkout Forms */}
        <div className='div-checkout-forms'>
          {/* Steps 1-2-3 */}
          <div className='div-checkout-steps-section'>
          </div>

          {/* Summary Section */}
          <div className='div-checkout-summary-section'>
          </div>
        </div>

        {/* Separator */}
        <div className='div-checkout-separator'/>

        {/* Help/Contact Instruction */}
        <div className='div-help-container'>
          Need help? Visit the
          <span className='clickable' onClick={this.onHelpCenter}> Help Center </span> or
          <span className='clickable' onClick={this.onContactUs}> Contact Us </span>
        </div>
      </div>
    )
  }

}

export default Checkout
