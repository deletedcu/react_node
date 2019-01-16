import React, { Component } from 'react'
import classNames from 'classnames'
import Button from '../../components/Button'
import GiftCardPanel from './components/GiftCardPanel'
import GiftDatePicker from './components/GiftDatePicker'

import './styles.css'
import imgNext from '../../assets/images/next.svg'

const GiftCardStep = {
  PriceForm: 0,
  RecipientForm: 1,
  PersonalMessageForm: 2, 
}

class GiftCards extends Component {

  constructor (props) {
    super(props)

    this.state = {
      step: GiftCardStep.PriceForm,
      
      price: 60,
      fromName: '',
      toName: '',
      email: '',
      personalMessage: '',
      forMe: false,
    }
  }

  onChangePrice = (price) => {
    this.setState({
      price: price,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onNextToRecipientForm = () => {
    this.setState({
      step: GiftCardStep.RecipientForm,
    })
  }

  onNextToPersonalMessage = (e) => {
    e.preventDefault()

    this.setState({
      step: GiftCardStep.PersonalMessageForm,
    })
  }

  onCheckout = (e) => {
    e.preventDefault()

    // TODO
  }

  render () {
    const { fromName, toName, email, forMe, personalMessage, step } = this.state

    return (
      <div>
        {/* Desktop Layout */}
        <div className='div-giftcards-container'>
          {/* Title */}
          <div className='div-giftcards-banner'>
            <div className='div-giftcards-title'>
              GIVE THE GIFT OF MEALPOST
            </div>
            <div className='div-giftcards-subtitle'>
              Whether it's for that special occasion or tough times in life- Mealpost gift cards
              are here for your friends and loved ones. Treat your friends and family to the
              most delicious gift of all.
            </div>
          </div>

          {/* Content */}
          <div className='div-giftcards-content'>
            {/* Price selection form */}
            { 
              step === GiftCardStep.PriceForm && 
              <div className='giftcard-form'>
                <div className='giftcard-form-title'>Choose Amount</div>
                <GiftCardPanel onChange={this.onChangePrice}/>
                <Button className='btn-next' onClick={this.onNextToRecipientForm}><span>Next</span><img src={imgNext} alt='next'/></Button>
              </div>
            }

            {/* Recipient input form */}
            { 
              step === GiftCardStep.RecipientForm &&
              <div className='giftcard-form'>
                <div className='giftcard-form-title'>Who is it for?</div>
                <div className='giftcard-form-for'>
                  <span className={classNames('clickable', {'has-bottom-border': !forMe})} onClick={()=>this.setState({forMe: false})}>A Friend</span>
                  <span className={classNames('clickable', {'has-bottom-border': forMe})} onClick={()=>this.setState({forMe: true})}>For Me</span>
                </div>

                { forMe ?
                  <Button type='submit' className='btn-next' onClick={this.onNextToPersonalMessage}><span>Next</span><img src={imgNext} alt='next'/></Button>
                  :
                  <form onSubmit={this.onNextToPersonalMessage}>
                    <div className='gift-card-form-name'>From</div>
                    <input className='form-input' required type='text' name='fromName' value={fromName} onChange={this.onChange}/>

                    <div className='gift-card-form-name'>Send Gift To</div>
                    <input className='form-input' required type='text' name='toName' value={toName} onChange={this.onChange} placeholder={`Recipient's Name`}/>

                    <input className='form-input' required type='email' name='email' value={email} onChange={this.onChange} placeholder={`Recipient's Email`}/>

                    <Button type='submit' className='btn-next'><span>Next</span><img src={imgNext} alt='next'/></Button>
                  </form>
                }
              </div>
            }

            {/* Personal Message Form */}
            {
              step === GiftCardStep.PersonalMessageForm &&
              <div className='giftcard-form'>
                <div className='giftcard-form-title'>Add a personalized message</div>
                <form onSubmit={this.onCheckout}>
                  <div className='gift-card-form-message'>
                    <div className='gift-card-form-message-title'>Your Message (optional)</div>
                    <textarea name='personalMessage' value={personalMessage} onChange={this.onChange}/>
                  </div>

                  <div className='gift-card-form-datepicker'>
                    <div className='gift-card-form-datepicker-title'>Delivery Date</div>
                    <GiftDatePicker onChange={this.onDateChange}/>
                  </div>

                  <Button type='submit' className='btn-checkout'>CHECKOUT</Button>
                </form>
                <div className='giftcard-form-bottom'>
                  Gift Cards are subject to our Terms and Conditions. Gift Cards will never expire, and will be redeemable via our Website, Mobile App, or anywhere Mealpost is available. This card is non-reloadable and, cannot be redeemed for cash, refunded, or returned.
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default GiftCards
