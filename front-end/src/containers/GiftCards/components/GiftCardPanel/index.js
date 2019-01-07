import React, { Component } from 'react'
import GiftCard from '../GiftCard'
import GiftCardAmountInput from '../GiftCardAmountInput'

import './styles.css'

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
      </div>
    )
  }
}

export default GiftCardPanel
