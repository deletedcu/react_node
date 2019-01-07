import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class GiftCardAmountInput extends Component {

  constructor (props) {
    super(props)

    this.state = {
      amount: '',
      selectedCell: -1,
    }
  }

  onChange = (e) => {
    const value = e.target.value

    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      this.props.onChangeAmount(value)
    })
  }

  onClickCell = (index, amount) => {
    this.setState({
      selectedCell: index,
    }, () => {
      this.props.onChangeAmount(amount)
    })
  }

  render () {
    const { selectedCell } = this.state

    return (
      <div className='giftcard-amount-input'>
        <div className='giftcard-amount-input-grid'>
          <div className={classNames('giftcard-amount-input-cell', {'giftcard-amount-input-cell-selected': selectedCell === 0})} onClick={()=>this.onClickCell(0, 60)}>$60</div>
          <div className='separator'/>
          <div className={classNames('giftcard-amount-input-cell', {'giftcard-amount-input-cell-selected': selectedCell === 1})} onClick={()=>this.onClickCell(1, 100)}>$100</div>
          <div className='separator'/>
          <div className={classNames('giftcard-amount-input-cell', {'giftcard-amount-input-cell-selected': selectedCell === 2})} onClick={()=>this.onClickCell(2, 200)}>$200</div>
          <div className='separator'/>
          <div className={classNames('giftcard-amount-input-cell', {'giftcard-amount-input-cell-selected': selectedCell === 3})} onClick={()=>this.onClickCell(3, this.state.amount)} style={{flexGrow: 1}}><input type='number' name='amount' value={this.state.amount} onChange={this.onChange} placeholder='Enter Amount'/></div>
        </div>
      </div>
    )
  }
}

export default GiftCardAmountInput
