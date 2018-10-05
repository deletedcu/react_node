import React, { Component } from 'react'
import SelectUSState from 'react-select-us-states'
import OrderSummary from './components/OrderSummary'
import CheckoutStepForm, { CheckoutFormStatus } from './components/CheckoutStepForm'

import './styles.css'

const CheckoutStep = {
  'account': 1,
  'address': 2,
  'payment': 3,
}
class Checkout extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentStep: CheckoutStep.address,
    }
  }

  onHelpCenter = () => {

  }

  onContactUs = () => {
    this.props.history.push('/contact-us')
  }

  onCreateAccount = () => {
    this.setState({
      currentStep: CheckoutStep.address,
    })
  }

  onCompleteDeliveryAddress = () => {
    this.setState({
      currentStep: CheckoutStep.payment,  
    })
  }

  onSelectState = (selectedState) => {
    console.log(selectedState)
  }

  render () {
    const currentStep = this.state.currentStep

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

            {/* Create Account Section */}
            <CheckoutStepForm
              number='1'
              status={ currentStep === CheckoutStep.account ? CheckoutFormStatus.editing : CheckoutFormStatus.completed }
              title='Create Account'
              buttonTitle='Proceed to Delivery Info'
              onSubmit={ this.onCreateAccount }
            >
              <div className='div-checkout-section-content div-checkout-account'>
                <div className='div-checkout-account-names'>
                  <div className='div-checkout-account-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-checkout-account-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                </div>

                <div className='div-checkout-account-email'>
                  <div><span>Email Address</span></div>
                  <div><input required type='email'/></div>
                </div>

                <div className='div-checkout-account-password'>
                  <div><span>Password</span></div>
                  <div><input required type='password'/></div>
                </div>

                <div className='div-checkout-account-login'>
                  <span>Already have an account? </span>
                  <span className='clickable'>Login</span>
                </div>
              </div>
            </CheckoutStepForm>

            {/* Deliver Address Section */}
            <CheckoutStepForm
              number='2'
              status={ currentStep === CheckoutStep.address ? CheckoutFormStatus.editing : (currentStep === CheckoutStep.account ? CheckoutFormStatus.disabled : CheckoutFormStatus.completed) }
              title='Delivery Address'
              buttonTitle='Proceed to Payment Info'
              onSubmit={ this.onCompleteDeliveryAddress }
            >
              <div className='div-checkout-section-content div-checkout-address'>
                <div className='div-checkout-address-first-row'>
                  <div className='div-checkout-address-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-checkout-address-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-checkout-address-contact-number'>
                    <div><span>Contact Number</span></div>
                    <div><input required type='text'/></div>
                  </div>
                </div>

                <div className='div-checkout-address-second-row'>
                  <div className='div-checkout-address-street'>
                    <div><span>Street Address</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-checkout-address-apartment'>
                    <div><span>Apartment Number</span></div>
                    <div><input required type='text'/></div>
                  </div>
                </div>

                <div className='div-checkout-address-third-row'>
                  <div className='div-checkout-address-city'>
                    <div><span>City</span></div>
                    <div><input required type='text'/></div>
                  </div>
                  <div className='div-checkout-address-state'>
                    <div><span>State</span></div>
                    <SelectUSState className='select-us-state' onChange={ this.onSelectState }/>
                  </div>
                  <div className='div-checkout-address-zip'>
                    <div><span>Zip</span></div>
                    <div><input required type='text'/></div>
                  </div>
                </div>
              </div>
            </CheckoutStepForm>

            {/* Payment Info Section */}
            <CheckoutStepForm
              number='3'
              status={ currentStep === CheckoutStep.payment ? CheckoutFormStatus.editing : CheckoutFormStatus.disabled }
              title='Payment Info'
              buttonTitle='Complete Order'
            >
            </CheckoutStepForm>
          </div>

          {/* Summary Section */}
          <div className='div-checkout-summary-section'>
            <OrderSummary
            />
          </div>
        </div>

        {/* Separator */}
        <div className='div-checkout-separator'/>

        {/* Help/Contact Instruction */}
        <div className='div-help-container'>
          Need help? Visit the&nbsp;
          <span className='clickable' onClick={this.onHelpCenter}>Help Center</span>&nbsp;or&nbsp;
          <span className='clickable' onClick={this.onContactUs}>Contact Us</span>
        </div>
      </div>
    )
  }

}

export default Checkout
