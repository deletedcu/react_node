import React, { Component } from 'react'
import { connect } from 'react-redux'
import DropdownList from './components/DropdownList'
import { Link } from 'react-router-dom'

import './styles.css'

import imgLogo from '../../../../assets/images/logo_footer.svg'

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
            <Link to='/how-it-works'>How It Works</Link>
            <Link to='/career'>Careers</Link>
            <div>Press</div>
          </DropdownList>

          <DropdownList title='PRODUCT'>
            <div onClick={this.onSendInvitation}>Get $20</div>
            <div><Link to='/menus'>Weekly Menu</Link></div>
            <div><Link to='/coming-soon'>Mobile App</Link></div>
          </DropdownList>

          <DropdownList title='HELP'>
            <div><Link to='/settings/order_history'>Manage Orders</Link></div>
            <div><Link to='/service-areas'>Service Areas</Link></div>
            <div><Link to='/help-center'>FAQ</Link></div>
          </DropdownList>

          <DropdownList title='CITIES'>
            <div><Link to='/service-areas'>San Francisco</Link></div>
            <div><Link to='/service-areas'>Oakland</Link></div>
            <div><Link to='/service-areas'>Berkely</Link></div>
            <div><Link to='/service-areas'>See More...</Link></div>
          </DropdownList>

          <DropdownList title='SOCIAL'>
            <div className='footer-middle-image-links'>
              <div id='facebook' className='div-social-link'/>
              <div id='twitter' className='div-social-link'/>
              <div id='instagram' className='div-social-link'/>
            </div>
          </DropdownList>
        </div>

        {/* Bottom */}
        <div className='div-footer-bottom'>
          <Link to='/terms-of-service'><span className='span-bottom-link'>Terms of Service</span></Link>
          <Link to='/terms-of-service'><span className='span-bottom-link'>Privacy</span></Link>
          <span className='span-bottom-link'>©2018 Mealpost.com</span>
        </div>
      </div>
    )
  }
}

export default connect()(DropdownFooter)
