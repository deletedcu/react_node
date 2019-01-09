import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import classNames from 'classnames'
import addressParser from 'parse-address-string'
import SelectUSState from 'react-select-us-states'
import CreditCardInput from 'react-credit-card-input'
import OrderSummary from './components/OrderSummary'
import CheckoutStepForm, { CheckoutFormStatus } from './components/CheckoutStepForm'
import RadioButton from '../../components/RadioButton'

import './styles.css'

import imgPaypal from '../../assets/images/paypal.svg'
import imgDownArrow from '../../assets/images/down_arrow_green.svg'

import { loginUser, signupUser } from '../../redux/actions/user'
import { hideSidebar } from '../../redux/actions/sideBar'
import { showOverlaySpinner, hideOverlaySpinner } from '../../redux/actions/overlaySpinner'
import { emptyCart } from '../../redux/actions/cart'
import getStripeToken from '../../services/stripeToken'
import checkout from '../../services/checkout'
import { showNotification } from '../../services/notification'
import { showModal, ModalType } from '../../redux/actions/modal';

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
      specialInstruction: '',
      city: '',
      state: '',
      zip: '',

      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
      cardName: '',

      deliveryDate: new Date(),
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
          streetAddress: (addressObject.street_address1 || '') + ' ' + (addressObject.street_address2 || ''),
          city: addressObject.city || '',
          state: addressObject.state || '',
          ...(addressObject.postal_code && { zip: addressObject.postal_code }),
        }, () => {
          document.getElementById('stateSelector').value = this.state.state || 'CA'
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
            city: this.state.city,
            postcode: this.state.zip,
            county: this.state.state,
            country: 'US',
            instructions: `Delivery Date: ${moment(this.state.deliveryDate).format('YYYY-MM-DD')}, Special Instructions: ${this.state.specialInstruction}`,
          }, tokenInfo).then(orderId => {
            const deliveryDate = this.state.deliveryDate.toUTCString()
            const totalPrice = this.orderSummary.totalPrice.toFixed(2)

            showNotification('Successfully processed your order', 'success')
            
            this.props.dispatch(hideOverlaySpinner())
            this.props.dispatch(emptyCart())
            this.props.history.push(`/order-confirm?order_id=${orderId}&delivery_date=${deliveryDate}&total_price=${totalPrice}`)
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

  onChangeDeliveryDate = (date) => {
    this.setState({
      deliveryDate: date,
    })
  }

  onContactUs = (e) => {
    e.preventDefault()
    
    this.props.dispatch(showModal(ModalType.contactUsModal))
  }

  /**
   * Render
   */
  render () {
    const { currentStep, currentAccountMode, currentPaymentOption } = this.state

    return (
      <div className='div-checkout-container'>
        <div className='div-checkout-wrapper'>
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
                        <div><span className='span-input-title'>First Name</span></div>
                        <div><input required type='text' name='accountFirstName' value={this.state.accountFirstName} onChange={this.onChange}/></div>
                      </div>
                      <div className='div-checkout-account-lastname'>
                        <div><span className='span-input-title'>Last Name</span></div>
                        <div><input required type='text' name='accountLastName' value={this.state.accountLastName} onChange={this.onChange}/></div>
                      </div>
                    </div>
                  }

                  {/* Email, Password */}
                  <div className='div-checkout-account-email'>
                    <div><span className='span-input-title'>Email Address</span></div>
                    <div><input required type='email' name='emailAddress' value={this.state.emailAddress} onChange={this.onChange}/></div>
                  </div>

                  <div className='div-checkout-account-password'>
                    <div><span className='span-input-title'>Password</span></div>
                    <div><input required type='password' name='password' value={this.state.password} onChange={this.onChange}/></div>
                  </div>

                  {/* Login/Signup Button */}
                  <div className='div-checkout-account-login'>
                    <span>{ currentAccountMode === AccountMode.create ? 'Already have an account?' : 'Create an account?'}</span>
                    <span className='clickable' onClick={this.onSwitchAccountMode}>{ currentAccountMode === AccountMode.create ? 'Log In' : 'Sign up' }</span>
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
                      <div><span className='span-input-title'>First Name</span></div>
                      <div><input required type='text' name='addressFirstName' value={this.state.addressFirstName} onChange={this.onChange}/></div>
                    </div>
                    <div className='div-checkout-address-lastname'>
                      <div><span className='span-input-title'>Last Name</span></div>
                      <div><input required type='text' name='addressLastName' value={this.state.addressLastName} onChange={this.onChange}/></div>
                    </div>
                    <div className='div-checkout-address-contact-number'>
                      <div><span className='span-input-title'>Contact Number</span></div>
                      <div><input required type='text' name='contactNumber' value={this.state.contactNumber} onChange={this.onChange}/></div>
                    </div>
                  </div>

                  {/* Street, special instructions */}
                  <div className='div-checkout-address-second-row'>
                    <div className='div-checkout-address-street'>
                      <div><span className='span-input-title'>Street Address</span></div>
                      <div><input required type='text' name='streetAddress' value={this.state.streetAddress} onChange={this.onChange}/></div>
                    </div>
                    <div className='div-checkout-address-special-instructions'>
                      <div className='div-special-instructions-title'><span className='span-input-title'>Special Instructions </span><span className='span-optional'>(OPTIONAL)</span></div>
                      <div><input type='text' name='specialInstruction' value={this.state.specialInstruction} onChange={this.onChange}/></div>
                    </div>
                  </div>

                  {/* City, State, Zip */}
                  <div className='div-checkout-address-third-row'>
                    <div className='div-checkout-address-city'>
                      <div><span className='span-input-title'>City</span></div>
                      <div><input required type='text' name='city' value={this.state.city} onChange={this.onChange}/></div>
                    </div>
                    <div className='div-checkout-address-state-zip'>
                      <div className='div-checkout-address-state'>
                        <div><span className='span-input-title'>State</span></div>
                        <SelectUSState id='stateSelector' className='select-us-state' value={this.state.state} onChange={ this.onSelectState }/>
                        <img src={imgDownArrow} alt='arrow'/>
                      </div>
                      <div className='div-checkout-address-zip'>
                        <div><span className='span-input-title'>Zip</span></div>
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
                      <div><span className='span-input-title'>Card Number</span></div>
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
                      <div><span className='span-input-title'>Name On Card</span></div>
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
                      You will be redirected to PayPal to complete your purchase securely.
                    </div>
                    <img className='img-paypal' src={imgPaypal} alt='paypal'/>
                  </div>
                </div>
                
              </CheckoutStepForm>
            </div>

            {/* Summary Section */}
            <div className='div-checkout-summary-section'>
              <OrderSummary
                onRef={ref => (this.orderSummary = ref)}
                deliveryDate={this.state.deliveryDate}
                onDateChange={this.onChangeDeliveryDate}
              />
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className='div-checkout-separator'/>

          {/* Help/Contact Instruction */}
          <div className='div-help-container'>
            Need help? Visit the&nbsp;
            <Link to='/help-center'><span>Help Center</span></Link>
            &nbsp;or&nbsp;
            <a className='clickable' onClick={this.onContactUs}><span>Contact Us</span></a>
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
