import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FooterTopSectionButton from './components/FooterTopSectionButton'
import FooterLanguageButton from './components/FooterLanguageButton'

import './styles.css'

import imgAdvertise from '../../../../assets/images/work-briefcase.svg'
import imgGiftCard from '../../../../assets/images/giftbox.svg'
import imgHelp from '../../../../assets/images/help.svg'
import imgLogo from '../../../../assets/images/logo_footer.svg'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class Footer extends Component {

  onAdvertise = () => {
    window.open('mailto: support@mealpost.io', '_self')
  }

  onHelpCenter = () => {
    this.props.history.push('/help-center')
  }

  onGiftCards = () => {
    this.props.history.push('/gift-cards')
  }

  onSendInvitation = () => {
    this.props.dispatch(showModal(ModalType.invitationModal))
  }

  render () {
    return (
      <div className='app-footer'>
        {/* Top Section */}
        <div className='div-footer-top-container'>
          <FooterTopSectionButton
            image={imgAdvertise}
            title='Advertise'
            hasSeparator={true}
            onClick={this.onAdvertise}
          />
          <FooterTopSectionButton
            image={imgGiftCard}
            title='Gift Cards'
            hasSeparator={true}
            onClick={this.onGiftCards}
          />
          <FooterTopSectionButton
            image={imgHelp}
            title='Help Center'
            hasSeparator={false}
            onClick={this.onHelpCenter}
          />
          <FooterLanguageButton/>
        </div>

        {/* Separator Line */}
        <div className='div-footer-separator-line'>
        </div>

        {/* Middle Section */}
        <div className='div-footer-middle-container'>
          <div className='div-footer-middle-logo'>
            <img src={imgLogo} alt='logo'/>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              COMPANY
            </div>
            <a className='footer-middle-link'>About</a>
            <Link to='/how-it-works' className='footer-middle-link'>How It Works</Link>
            <Link to='/career' className='footer-middle-link'>Careers</Link>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              PRODUCT
            </div>
            <a className='footer-middle-link' onClick={this.onSendInvitation}>Get $20 Off</a>
            <Link to='/menus' className='footer-middle-link'>Weekly Menu</Link>
            <Link to='/coming-soon' className='footer-middle-link'>Mobile App</Link>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              HELP
            </div>
            <Link to='/settings/order_history' className='footer-middle-link'>Manage Orders</Link>
            <Link to='/service-areas' className='footer-middle-link'>Service Areas</Link>
            <Link to='/help-center' className='footer-middle-link'>FAQ</Link>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              CITIES
            </div>
            <Link to='/service-areas' className='footer-middle-link'>San Francisco</Link>
            <Link to='/service-areas' className='footer-middle-link'>Oakland</Link>
            <Link to='/service-areas' className='footer-middle-link'>Berkely</Link>
            <Link to='/service-areas' className='footer-middle-link'>Concord</Link>
            <Link to='/service-areas' className='footer-middle-link'>See More...</Link>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              SOCIAL
            </div>
            <div className='footer-middle-image-links'>
              <div id='facebook' className='div-social-link'/>
              <div id='twitter' className='div-social-link'/>
              <div id='instagram' className='div-social-link'/>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='div-footer-bottom-container'>
          <div className='div-footer-bottom-links'>
            <Link to='/terms-of-service'><span className='footer-bottom-link'>Terms of Service</span></Link>
            <Link to='/terms-of-service'><span className='footer-bottom-link'>Privacy</span></Link>
            <span className='footer-bottom-link'>@2018 Mealpost.com</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Footer)
