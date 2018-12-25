import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'

import './styles.css'

class RedeemCredit extends Component {

  constructor (props) {
    super(props)

    this.state = {
      code: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onRedeem = () => {

  }

  render () {
    return (
      <div className='div-redeem-credit-container'>
        <div className='div-redeem-credit-form'>
          <div className='div-redeem-credit-title'>REDEEM A CODE</div>
          <div className='div-redeem-credit-balance'>Account Balance: $0.00</div>
          <input className='input-code' name='code' value={this.state.code} onChange={this.onChange} placeholder='Enter Code'/>
          <Button className='btn-redeem' onClick={this.onRedeem}>Redeem</Button>
          <div className='div-redeem-credit-description'>Enter your code to redeem direct account credits, and gift cards. Mealpost gift cards are subject to Mealpost's Gift Card Terms and Conditions.</div>
          <Link to='/help-center' className='span-help-link clickable'>Need help redeeming a code?</Link>
        </div>
      </div>
    )
  }
}

export default RedeemCredit
