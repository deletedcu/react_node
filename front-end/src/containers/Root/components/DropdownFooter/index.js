import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropdownList from './components/DropdownList'
import { Link } from 'react-router-dom'

import './styles.css'

import imgLogo from '../../../../assets/images/logo_footer.svg'
import imgFacebook from '../../../../assets/images/facebook.svg'
import imgTwitter from '../../../../assets/images/twitter.svg'
import imgInstagram from '../../../../assets/images/instagram.svg'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class DropdownFooter extends Component {

  onSendInvitation = () => {
    this.props.dispatch(showModal(ModalType.invitationModal))
  }

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
            <div>How It Works</div>
            <Link to='/career'>Careers</Link>
            <div>Press</div>
          </DropdownList>

          <DropdownList title='PRODUCT'>
            <div onClick={this.onSendInvitation}>Get $20 off</div>
            <div><Link to='/menus'>Menu</Link></div>
            <Link to='/menus'>Meal Plans</Link>
            <div>Partnerships</div>
          </DropdownList>

          <DropdownList title='HELP'>
            <Link to='/contact-us'>Contact</Link>
            <div>Service Areas</div>
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
          <Link to='/terms-of-service'><span className='span-bottom-link'>Terms of Service</span></Link>
          <Link to='/terms-of-service'><span className='span-bottom-link'>Privacy</span></Link>
          <span className='span-bottom-link'>@2018 Mealpost.com</span>
        </div>
      </div>
    )
  }
}

export default connect()(DropdownFooter)
