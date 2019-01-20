import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

import imgPrize from '../../../assets/images/prize.svg'

import { closeModal } from '../../../redux/actions/modal'
class InvitationModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email1: '',
      email2: '',
    }
  }

  onSendInvite = () => {

  }

  onRedeemCredit = () => {
    this.props.history.push('/settings/redeem_credit')
    this.props.dispatch(closeModal())
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='invitation-modal' onClick={(e)=>e.stopPropagation()}>
          <img className='img-prize' src={imgPrize} alt='prize'/>
          <div className='invitation-modal-header'>
            <div className='invitation-modal-title'>Invite a friend, you both get $20</div>
            <div className='invitation-modal-description'>Ask your friends to signup with your referral code and place an order. Once done, both you and your friend each earn $20 Mealpost Credit.</div>
          </div>

          <div className='invitation-modal-form'>
            <div className='span-title'>REFER FRIENDS & EARN</div>
            <input type='email' name='email1' value={this.state.email1} onChange={this.onChange} placeholder='Enter email addresses'/>
            <input type='email' name='email2' value={this.state.email2} onChange={this.onChange} placeholder='Enter email addresses'/>
            <Button className='btn-send-invite' onClick={this.onSendInvite}>SEND INVITES</Button>
            <span className='span-link clickable' onClick={this.onRedeemCredit}>Redeem your Credits</span>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(InvitationModal)
