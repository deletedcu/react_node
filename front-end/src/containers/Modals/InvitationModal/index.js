import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'
import imgClose from '../../../assets/images/close_button.svg'
import imgShare from '../../../assets/images/share.svg'
import imgFacebook from '../../../assets/images/facebook_blue.svg'
import imgTwitter from '../../../assets/images/twitter_blue.svg'
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

  onTerms = () => {
    this.props.history.push('/terms-of-service')
    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='invitation-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='invitation-modal-left'>
            <div className='invitation-modal-header'>
              <div className='invitation-modal-title'>Invite a friend, you both get $15</div>
              <div className='invitation-modal-description'>Ask your friends to signup with your referral code and place an order. Once done, both you and your friend each earn $15 Mealpost Credit.</div>
            </div>

            <div className='invitation-modal-form'>
              <div className='span-title'>REFER FRIENDS & EARN</div>
              <input type='email' name='email1' value={this.state.email1} onChange={this.onChange} placeholder='Enter email addresses'/>
              <input type='email' name='email2' value={this.state.email2} onChange={this.onChange} placeholder='Enter email addresses'/>
              <Button className='btn-send-invite' onClick={this.onSendInvite}>Send Invites</Button>
              <span className='span-link clickable' onClick={this.onRedeemCredit}>Redeem your Credits</span>
            </div>
          </div>
          
          <div className='invitation-modal-right'>
            <div className='invitation-modal-logo'>
              <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
              <img className='img-prize' src={imgPrize} alt='prize'/>
            </div>
            <div className='invitation-modal-form'>
              <div className='social-shares'>
                <img className='clickable' src={imgFacebook} alt='facebook'/>
                <img className='clickable' src={imgTwitter} alt='twitter'/>
              </div>
              <div className='referral-code-title'>YOUR REFERRAL CODE</div>
              <div className='referral-code'>AB1234</div>
              <Button className='btn-send-invite' onClick={this.onSendInvite}><img src={imgShare} alt='share'/>SHARE NOW</Button>
              <span className='span-link clickable' onClick={this.onTerms}>Terms and Conditions</span>
            </div>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(InvitationModal)
