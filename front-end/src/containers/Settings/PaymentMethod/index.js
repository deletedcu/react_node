import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import PaymentMethodInfo from './components/PaymentMethodInfo'
import './styles.css'

import { showModal, ModalType } from '../../../redux/actions/modal'

class PaymentMethod extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  onAddCard = () => {
    this.props.dispatch(showModal(ModalType.cardInfoModal))
  }

  onSelectionChange = (index) => {
    this.setState({
      selectedIndex: index,
    })
  }

  render () {
    const { selectedIndex } = this.state

    return (
      <div className='div-payment-methods-container'>
        {/* Form fields */}
        <div className='div-connected-payment-methods'>
          <PaymentMethodInfo underline={true} checked={selectedIndex === 0} onCheckChange={() => {this.onSelectionChange(0)}}/>
          <PaymentMethodInfo underline={true} checked={selectedIndex === 1} onCheckChange={() => {this.onSelectionChange(1)}}/>
          <PaymentMethodInfo underline={false} checked={selectedIndex === 2} onCheckChange={() => {this.onSelectionChange(2)}}/>
        </div>

        {/* Save button */}
        <div className='div-add-card'>
          <Button className='btn-add-card' onClick={ this.onAddCard }>Add Credit/Debit Card</Button>
        </div>
      </div>
    )
  }
}

export default connect()(PaymentMethod)
