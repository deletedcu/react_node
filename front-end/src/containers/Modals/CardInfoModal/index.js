import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import CreditCardInput from 'react-credit-card-input'
import Button from '../../../components/Button'

import './styles.css'

import { closeModal } from '../../../redux/actions/modal'

class CardInfoModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      cardName: '',
      cardHolderName: '',
      cardNumber: '',
      cardExpiry: '',
      cardCVC: '',
    }
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

  onSave = () => {

  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='card-info-modal' onClick={(e)=>e.stopPropagation()}>
          {/* <div className='card-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div> */}

          <div className='card-info-title'>Add New Card</div>
          <div className='separator'/>

          <div className='card-info'>
            <span>Name on Card</span>
            <input className='input-name' type='text' name='cardName' value={this.state.cardName} onChange={this.onChange}/>
          </div>

          <div className='card-info'>
            <span>Card Number</span>
            <div className='card-input-wrapper'>
              <CreditCardInput
                cardNumberInputProps={{ value: this.state.cardNumber, onChange: this.onChangeCardNumber }}
                cardExpiryInputProps={{ value: this.state.cardExpiry, onChange: this.onChangeCardExpiryDate }}
                cardCVCInputProps={{ value: this.state.cardCVC, onChange: this.onChangeCardCVC }}
                fieldClassName='input'
                containerStyle={{width: '100%'}}
              />
            </div>
          </div>

          <div className='card-info'>
            <span>Card Holder's Name</span>
            <input className='input-name' type='text' name='cardHolderName' value={this.state.cardHolderName} onChange={this.onChange}/>
          </div>

          <div className='card-info-save'>
            <Button className='btn-save' onClick={this.onSave}>Save</Button>
            <Button onClick={this.onClose} className='btn-cancel'>Cancel</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(CardInfoModal)
