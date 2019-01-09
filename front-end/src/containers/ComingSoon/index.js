import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

import './styles.css'
import imgGlobe from '../../assets/images/globe_white.svg'
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
          <Link to='/how-it-works'>About</Link>
          <a className='clickable' onClick={this.onContactUs}>Contact</a>
        </div>

        <div className='div-comingsoon-center'>
          <div className='div-comingsoon-center-content'>
            <img className='img-logo' src={imgLogo} alt='logo'/>
            <div className='div-note'>Hey! We’re not quite ready for you just yet   <span role='img' aria-label='smirk'>😏</span></div>
            <div className='div-note'>Our App is in Beta and is expected to launch real soon! Why not stay up to date with all the awesome features we’re releasing, trust me, it’s exciting!   <span role='img' aria-label='laughter'>😆</span></div>
            <div className='div-note'>Did we forget to mention, first 50 users will get free meals during release?    <span role='img' aria-label='finger'>👇</span></div>
            <div className='div-input'>
              <input name='email' type='email' value={this.state.email} placeholder='Email address' onChange={this.onChange}/>
              <Button onClick={this.onGetUpdate}>Get updates</Button>
            </div>
          </div>
        </div>

        <div className='div-comingsoon-social-links'>
          <img className='clickable' src={imgFacebook} alt='fb'/>
          <img className='clickable' src={imgTwitter} alt='tw'/>
          <img className='clickable' src={imgInstagram} alt='ins'/>
        </div>

        <div className='div-comingsoon-bottom'>
          <div className='div-comingsoon-bottom-left'>
            <Link to='/terms-of-service'>Terms of Service</Link>
            <div className='separator'/>
            <Link to='/terms-of-service'>Privacy</Link>
            <div className='separator'/>
            <span>©2018 Mealpost</span>
          </div>
          <img className='img-globe clickable' src={imgGlobe} alt='globe'/>
        </div>
      </div>
    )
  }
}

export default connect()(ComingSoon)
