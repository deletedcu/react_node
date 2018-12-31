import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

import imgLogo from '../../../../assets/images/logo_footer.svg'
import imgGlobe from '../../../../assets/images/globe_white.svg'

class SimplifiedFooter extends Component {

  render () {
    return (
      <div className='simplified-footer'>
        <div className='simplified-footer-left'>
          <img className='img-logo' src={imgLogo} alt='logo'/>
          <div className='simplified-footer-links'>
            <Link className='link' to='/terms-of-service'>Terms of Service</Link>
            <div className='separator'/>
            <Link className='link' to='/terms-of-service'>Privacy</Link>
            <div className='separator'/>
            <Link className='link' to='/home'>©2018 Mealpost.io</Link>
          </div>
        </div>

        <div className='simplified-footer-right'>
          <img className='img-globe' src={imgGlobe} alt='globe'/>
        </div>
      </div>
    )
  }
}

export default SimplifiedFooter
