import React, { Component } from 'react'
import GiftCard from '../GiftCard'
import GiftCardAmountInput from '../GiftCardAmountInput'
import Button from '../../../../components/Button'

import './styles.css'
import imgDot from '../../../../assets/images/dot.svg'

class GiftCardPanel extends Component {

  constructor (props) {
    super(props)

    this.state = {
      price: 0,
    }
  }

  onChangeAmount = (amount) => {
    this.setState({
      price: amount || 0,
    }, () => {
      this.props.onChange(this.state.price)
    })
  }

  onRedeemCode = () => {
    this.props.onRedeemCode()
  }

  render () {
    const { price } = this.state

    return (
      <div className='giftcard-panel'>
        <GiftCard
          price={price}
          onClick={()=>{}}
        />

        <GiftCardAmountInput
          onChangeAmount={this.onChangeAmount}
        />

        <div className='giftcard-panel-instructions'>
          <div className='giftcard-panel-instruction'>
            <img src={imgDot} alt='dot'/>
            <span>Gift Cards are subject to our Gift Card Terms.</span>
          </div>
          <div className='giftcard-panel-instruction'>
            <img src={imgDot} alt='dot'/>
            <span>Product and shipping restrictions may apply.</span>
          </div>
          <div className='giftcard-panel-instruction'>
            <img src={imgDot} alt='dot'/>
            <span>Your payment card will be charged at the time of purchase.</span>
          </div>
          <div className='giftcard-panel-instruction'>
            <img src={imgDot} alt='dot'/>
            <span>Gift Cards are non-refundable (unless required by law).</span>
          </div>
        </div>

        <Button className='btn-redeem-code' onClick={this.onRedeemCode}>Redeem your code</Button>
      </div>
    )
  }
}

export default GiftCardPanel
