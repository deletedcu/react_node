import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import addressParser from 'parse-address-string'
import SelectUSState from 'react-select-us-states'
import CreditCardInput from 'react-credit-card-input'
import OrderSummary from './components/OrderSummary'
import CheckoutStepForm, { CheckoutFormStatus } from './components/CheckoutStepForm'
import RadioButton from '../../components/RadioButton'

import './styles.css'

import imgPaypal from '../../assets/images/paypal.svg'

import { loginUser, signupUser } from '../../redux/actions/user'
import { hideSidebar } from '../../redux/actions/sideBar'
import { showOverlaySpinner, hideOverlaySpinner } from '../../redux/actions/overlaySpinner'
import { emptyCart } from '../../redux/actions/cart'
import getStripeToken from '../../services/stripeToken'
import checkout from '../../services/checkout'
import { showNotification } from '../../services/notification'

const CheckoutStep = {
  'account': 1,
  'address': 2,
  'payment': 3,
}
const AccountMode = {
  'create': 1,
  'login': 2,
}
const PaymentOption = {
  'stripe': 1,
  'paypal': 2,
}

class Checkout extends Component {

  constructor (props) {
    super(props)

    props.dispatch(hideSidebar())

    this.state = {
      currentAccountMode: AccountMode.create,
      currentStep: props.user.loggedIn ? CheckoutStep.address : CheckoutStep.account,
      currentPaymentOption: PaymentOption.stripe,

      accountFirstName: '',
      accountLastName: '',
      emailAddress: '',
      password: '',

      addressFirstName: props.user.loggedIn ? props.user.user.first_name : '',
      addressLastName: props.user.loggedIn ? props.user.user.last_name : '',
      contactNumber: props.user.loggedIn ? props.user.user.phone : '',
      streetAddress: '',
      apartmentNumber: '',
      city: '',
      state: '',
      zip: props.user.loggedIn ? props.user.user.zip : '',

      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
      cardName: '',
    }

    props.user.loggedIn && this.updateAddress()
  }

  componentWillReceiveProps ({user}) {
    if (user.loggedIn && this.state.currentStep === CheckoutStep.account) {
      this.setState({
        currentStep: CheckoutStep.address,
        addressFirstName: user.user.first_name,
        addressLastName: user.user.last_name,
        contactNumber: user.user.phone,
        zip: user.user.zip,
      }, () => {
        this.updateAddress()
      })
    }
  }

  /**
   * Parse user's shipping address and fill out the address form
   */
  updateAddress = () => {
    addressParser(this.props.user.user.shipping_address, (err, addressObject) => {
      if (!err) {
        this.setState({
          streetAddress: addressObject.street_address1 || '',
          apartmentNumber: addressObject.street_address2 || '',
          city: addressObject.city || '',
          state: addressObject.state || '',
          ...(addressObject.postal_code && { zip: addressObject.postal_code }),
        }, () => {
          document.getElementById('stateSelector').value = this.state.state || 'AL'
        })
      }
    })
  }

  /**
   * Switch to login/signup form
   */
  onSwitchAccountMode = () => {
    this.setState({
      currentAccountMode: this.state.currentAccountMode === AccountMode.login ? AccountMode.create : AccountMode.login,
    })
  }

  /**
   * Section Submit Handler
   */
  onAuthenticate = () => {
    if (this.state.currentAccountMode === AccountMode.create) {
      // sign up
      this.props.dispatch(signupUser({
        email: this.state.emailAddress,
        password: this.state.password,
        first_name: this.state.accountFirstName,
        last_name: this.state.accountLastName,
      }))
    } else {
      // login
      this.props.dispatch(loginUser(this.state.emailAddress, this.state.password))
    }
  }

  onCompleteDeliveryAddress = () => {
    this.setState({
      currentStep: CheckoutStep.payment,  
    })
  }

  onCompleteOrder = () => {
    if (this.state.currentPaymentOption === PaymentOption.stripe) {
      // stripe
      // validation check
      if (!this.state.cardNumber || !this.state.cardExpiry || !this.state.cardCVC || !this.state.cardName) {
        showNotification('Please fill out the form', 'error')
        return
      }
  
      // retrieve stripe token
      this.props.dispatch(showOverlaySpinner())

      getStripeToken(this.state.cardNumber, this.state.cardExpiry, this.state.cardCVC, this.state.cardName)
        .then(tokenInfo => {
          checkout(this.props.user.user.token, this.props.cart.items, {
            first_name: this.state.addressFirstName,
            last_name: this.state.addressLastName,
            line_1: this.state.streetAddress,
            line_2: this.state.apartmentNumber,
            city: this.state.city,
            postcode: this.state.zip,
            county: this.state.state,
            country: 'US',
          }, tokenInfo).then(res => {
            showNotification('Successfully processed your order', 'success')
            
            this.props.dispatch(hideOverlaySpinner())
            this.props.dispatch(emptyCart())

            this.props.history.push('/order-confirm')
          }).catch(err => {
            showNotification(err, 'error')
            this.props.dispatch(hideOverlaySpinner())
          })
        })
        .catch(err => {
          this.props.dispatch(hideOverlaySpinner())
          showNotification('Failed to retrieve card info', 'error')
        })
    } else {
      // paypal
    }
  }


  /**
   * Input Change Handler
   */
  onSelectState = (selectedState) => {
    this.setState({
      state: selectedState,
    })
  }

  onChangeCardNumber = (e) => {
    this.setState({
      cardNumber: e.target.value,
    })
  }

  onChangeCardExpiryDate = (e) => {
    this.setState({
      cardExpiry: e.target.value,
    })
  }

  onChangeCardCVC = (e) => {
    this.setState({
      cardCVC: e.target.value,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onPaymentOptionChange = (option, checked) => {
    // In this version, only enable Stripe.
    if ((option === PaymentOption.stripe && checked === true) || (option === PaymentOption.paypal && checked === false)) {
      this.setState({
        currentPaymentOption: PaymentOption.stripe,
      })
    } else {
      this.setState({
        currentPaymentOption: PaymentOption.stripe,
      })
    }
  }

  /**
   * Render
   */
  render () {
    const { currentStep, currentAccountMode, currentPaymentOption } = this.state

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
              onSubmit={ this.onAuthenticate }
            >
              <div className='div-checkout-section-content div-checkout-account'>
                {/* First Name, Last Name => only visible in signup mode */}
                { currentAccountMode === AccountMode.create &&
                  <div className='div-checkout-account-names'>
                    <div className='div-checkout-account-firstname'>
                      <div><span>First Name</span></div>
                      <div><input required type='text' name='accountFirstName' value={this.state.accountFirstName} onChange={this.onChange}/></div>
                    </div>
                    <div className='div-checkout-account-lastname'>
                      <div><span>Last Name</span></div>
                      <div><input required type='text' name='accountLastName' value={this.state.accountLastName} onChange={this.onChange}/></div>
                    </div>
                  </div>
                }

                {/* Email, Password */}
                <div className='div-checkout-account-email'>
                  <div><span>Email Address</span></div>
                  <div><input required type='email' name='emailAddress' value={this.state.emailAddress} onChange={this.onChange}/></div>
                </div>

                <div className='div-checkout-account-password'>
                  <div><span>Password</span></div>
                  <div><input required type='password' name='password' value={this.state.password} onChange={this.onChange}/></div>
                </div>

                {/* Login/Signup Button */}
                <div className='div-checkout-account-login'>
                  <span>{ currentAccountMode === AccountMode.create ? 'Already have an account?' : 'Create an account?'}</span>
                  <span className='clickable' onClick={this.onSwitchAccountMode}>{ currentAccountMode === AccountMode.create ? 'Login' : 'Sign up' }</span>
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
                {/* First Name, Last Name, Contact Number */}
                <div className='div-checkout-address-first-row'>
                  <div className='div-checkout-address-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text' name='addressFirstName' value={this.state.addressFirstName} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-checkout-address-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text' name='addressLastName' value={this.state.addressLastName} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-checkout-address-contact-number'>
                    <div><span>Contact Number</span></div>
                    <div><input required type='text' name='contactNumber' value={this.state.contactNumber} onChange={this.onChange}/></div>
                  </div>
                </div>

                {/* Street, Apartment */}
                <div className='div-checkout-address-second-row'>
                  <div className='div-checkout-address-street'>
                    <div><span>Street Address</span></div>
                    <div><input required type='text' name='streetAddress' value={this.state.streetAddress} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-checkout-address-apartment'>
                    <div><span>Apartment Number</span></div>
                    <div><input required type='text' name='apartmentNumber' value={this.state.apartmentNumber} onChange={this.onChange}/></div>
                  </div>
                </div>

                {/* City, State, Zip */}
                <div className='div-checkout-address-third-row'>
                  <div className='div-checkout-address-city'>
                    <div><span>City</span></div>
                    <div><input required type='text' name='city' value={this.state.city} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-checkout-address-state-zip'>
                    <div className='div-checkout-address-state'>
                      <div><span>State</span></div>
                      <SelectUSState id='stateSelector' className='select-us-state' value={this.state.state} onChange={ this.onSelectState }/>
                    </div>
                    <div className='div-checkout-address-zip'>
                      <div><span>Zip</span></div>
                      <div><input required type='text' name='zip' value={this.state.zip} onChange={this.onChange}/></div>
                    </div>
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
              onSubmit={ this.onCompleteOrder }
            >
              <div className='div-checkout-section-content div-checkout-payment'>
                {/* Stripe */}
                <div className={ classNames('div-checkout-payment-credit-card', {'div-checkout-payment-active': currentPaymentOption === PaymentOption.stripe})}>
                  <RadioButton
                    checked={ currentPaymentOption === PaymentOption.stripe }
                    onCheckChange={ (checked) => this.onPaymentOptionChange(PaymentOption.stripe, checked) }
                  >
                    Credit Card
                  </RadioButton>
                  <div className='div-checkout-payment-credit-card-number'>
                    <div><span>Card Number</span></div>
                    <div className='div-checkout-payment-credit-card-number-wrapper'>
                      <CreditCardInput
                        cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.onChangeCardNumber }}
                        cardExpiryInputProps={{ value: this.state.cardExpiry, onChange: this.onChangeCardExpiryDate }}
                        cardCVCInputProps={{ value: this.state.cardCVC, onChange: this.onChangeCardCVC }}
                        fieldClassName='input'
                        containerStyle={{width: '100%'}}
                      />
                    </div>
                  </div>
                  <div className='div-checkout-payment-credit-card-name'>
                    <div><span>Name On Card</span></div>
                    <div><input type='text' name='cardName' value={this.state.cardName} onChange={this.onChange}/></div>
                  </div>
                </div>

                {/* Paypal */}
                <div className={ classNames('div-checkout-payment-paypal', {'div-checkout-payment-active': currentPaymentOption === PaymentOption.paypal})}>
                  <RadioButton
                    checked={ currentPaymentOption === PaymentOption.paypal }
                    onCheckChange={ (checked) => this.onPaymentOptionChange(PaymentOption.paypal, checked) }
                  >
                    Paypal
                  </RadioButton>
                  <div className='div-checkout-payment-paypal-instruction'>
                    You will be redirected to Paypal website to complete the payment securely.
                  </div>
                  <img className='img-paypal' src={imgPaypal} alt='paypal'/>
                </div>
              </div>
              
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
          <Link to='/help-center'><span>Help Center</span></Link>
          &nbsp;or&nbsp;
          <Link to='/contact-us'><span>Contact Us</span></Link>
        </div>
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

export default connect(mapStateToProps)(Checkout)
