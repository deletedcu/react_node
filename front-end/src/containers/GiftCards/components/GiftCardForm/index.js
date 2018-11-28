import React, { Component } from 'react'
import Button from '../../../../components/Button'
import GiftDatePicker from '../GiftDatePicker'

import './styles.css'

class GiftCardForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      fromFirstName: '',
      fromLastName: '',
      toFirstName: '',
      toLastName: '',
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

  render () {
    return (
      <div className='gift-card-form'>
        <form onSubmit={this.onCheckout}>
          <div className='gift-card-form-name'>From</div>
          <div className='gift-card-form-double-inputs'>
            <input required type='text' name='fromFirstName' value={this.state.fromFirstName} onChange={this.onChange} placeholder='First Name'/>
            <input required type='text' name='fromLastName' value={this.state.fromLastName} onChange={this.onChange} placeholder='Last Name'/>
          </div>

          <div className='gift-card-form-name'>Recipient's Name</div>
          <div className='gift-card-form-double-inputs'>
            <input required type='text' name='toFirstName' value={this.state.toFirstName} onChange={this.onChange} placeholder='First Name'/>
            <input required type='text' name='toLastName' value={this.state.toLastName} onChange={this.onChange} placeholder='Last Name'/>
          </div>

          <input required type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder='Email'/>

          <div className='gift-card-form-datepicker'>
            <div className='gift-card-form-datepicker-title'>Send Gift email on</div>
            <GiftDatePicker onChange={this.onDateChange}/>
          </div>

          <div className='gift-card-form-message'>
            <div className='gift-card-form-message-title'>Personal Message</div>
            <textarea required name='personalMessage' value={this.state.personalMessage} onChange={this.onChange}/>
          </div>

          <Button type='submit' className='btn-checkout'>PROCEED TO CHECKOUT</Button>
        </form>
      </div>
    )
  }
}

export default GiftCardForm
