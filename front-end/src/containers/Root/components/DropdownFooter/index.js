import React, { Component } from 'react'
import DropdownList from './components/DropdownList'

import './styles.css'

import imgLogo from '../../../../assets/images/logo_footer.svg'
import imgFacebook from '../../../../assets/images/facebook.svg'
import imgTwitter from '../../../../assets/images/twitter.svg'
import imgInstagram from '../../../../assets/images/instagram.svg'

class DropdownFooter extends Component {

  render () {
    return (
      <div className='responsive-app-footer'>
        {/* Logo */}
        <div>
          <img className='img-logo' src={imgLogo} alt='logo'/>
        </div>

        {/* Dropdowns */}
        <div className='div-footer-dropdown-container'>
          <DropdownList title='COMPANY'>
            <div>About</div>
            <div>Careers</div>
            <div>Press</div>
            <div>Unlimited</div>
          </DropdownList>
          <DropdownList title='HELP'>
            <div>Payments</div>
            <div>Shipping</div>
            <div>FAQ</div>
          </DropdownList>
          <DropdownList title='CITIES'>
            <div>San Francisco</div>
            <div>San Jose</div>
            <div>Berkely</div>
            <div>Concord</div>
            <div>See More...</div>
          </DropdownList>
          <DropdownList title='SOCIAL'>
            <div className='footer-middle-image-links'>
              <a><img src={imgFacebook} alt='facebook'/></a>
              <a><img src={imgTwitter} alt='twitter'/></a>
              <a><img src={imgInstagram} alt='instagram'/></a>
            </div>
          </DropdownList>
        </div>

        {/* Bottom */}
        <div className='div-footer-bottom'>
          <span className='span-bottom-link'>Terms of Service</span>
          <span className='span-bottom-link'>Privacy</span>
          <span className='span-bottom-link'>@2018 Mealpost.com</span>
        </div>
      </div>
    )
  }
}

export default DropdownFooter
