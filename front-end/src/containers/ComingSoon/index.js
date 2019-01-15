import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

import './styles.css'
import imgFacebook from '../../assets/images/facebook_white.svg'
import imgTwitter from '../../assets/images/twitter_white.svg'
import imgInstagram from '../../assets/images/instagram_white.svg'
import imgLogo from '../../assets/images/logo_white_text.png'
import { showModal, ModalType } from '../../redux/actions/modal';

class ComingSoon extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onGetUpdate = () => {

  }

  onContactUs = (e) => {
    e.preventDefault()

    this.props.dispatch(showModal(ModalType.contactUsModal))
  }

  render () {
    return (
      <div className='div-comingsoon-container'>
        <div className='div-comingsoon-header'>
          <img className='img-logo' src={imgLogo} alt='logo'/>
        </div>

        <div className='div-comingsoon-center'>
          <div className='div-comingsoon-center-content'>
            <div className='div-comingsoon-title'>
              Reinventing the way you eat.
            </div>
            <div className='div-comingsoon-subtitle'>
              Subscribe to be part of our beta launch.
            </div>
            <div className='div-input'>
              <input name='email' type='email' value={this.state.email} placeholder='Email address' onChange={this.onChange}/>
              <Button onClick={this.onGetUpdate}>Get updates</Button>
            </div>
            <div className='div-comingsoon-social-links'>
              <img className='clickable' src={imgFacebook} alt='fb'/>
              <img className='clickable' src={imgTwitter} alt='tw'/>
              <img className='clickable' src={imgInstagram} alt='ins'/>
            </div>
          </div>
        </div>

        

        <div className='div-comingsoon-bottom'>
          <Link to='/terms-of-service'>Terms of Service</Link>
          <div className='separator'/>
          <Link to='/terms-of-service'>Privacy</Link>
          <div className='separator'/>
          <span>©2018 Mealpost</span>
        </div>
      </div>
    )
  }
}

export default connect()(ComingSoon)
