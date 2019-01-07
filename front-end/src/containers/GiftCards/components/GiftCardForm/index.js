import React, { Component } from 'react'
import Button from '../../../../components/Button'
import GiftDatePicker from '../GiftDatePicker'

import './styles.css'

class GiftCardForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      fromName: '',
      toName: '',
      email: '',
      sendDate: new Date(),
      personalMessage: '',
    }
  }

  onCheckout = (e) => {
    e.preventDefault()
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onDateChange = (date) => {
    this.setState({
      sendDate: date,
    })
  }

  onRedeemCode = () => {

  }

  render () {
    return (
      <div className='gift-card-form'>
        <form onSubmit={this.onCheckout}>
          <div className='gift-card-form-name'>From</div>
          <input required type='text' name='fromName' value={this.state.fromName} onChange={this.onChange} placeholder='Your Name'/>

          <div className='gift-card-form-name'>Send Gift To</div>
          <input required type='text' name='toName' value={this.state.toName} onChange={this.onChange} placeholder={`Recipient's Name`}/>

          <input required type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder={`Recipient's Email`}/>

          <div className='gift-card-form-datepicker'>
            <div className='gift-card-form-datepicker-title'>Delivery Date</div>
            <GiftDatePicker onChange={this.onDateChange}/>
          </div>

          <div className='gift-card-form-message'>
            <div className='gift-card-form-message-title'>Personal Message</div>
            <textarea required name='personalMessage' value={this.state.personalMessage} onChange={this.onChange}/>
          </div>

          <Button type='submit' className='btn-checkout'>ADD TO CART</Button>

          <div className='div-bottom-instruction'>Gift cards are subject to our Terms and Conditions</div>

          <Button type='button' className='btn-redeem-code' onClick={this.onRedeemCode}>Redeem your code</Button>
        </form>
      </div>
    )
  }
}

export default GiftCardForm
