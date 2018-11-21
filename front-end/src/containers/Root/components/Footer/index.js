import React, { Component } from 'react'
import FooterTopSectionButton from './components/FooterTopSectionButton'
import FooterLanguageButton from './components/FooterLanguageButton'

import './styles.css'

import imgAdvertise from '../../../../assets/images/work-briefcase.svg'
import imgCoin from '../../../../assets/images/mealpost_coin.svg'
import imgGiftCard from '../../../../assets/images/giftbox.svg'
import imgHelp from '../../../../assets/images/help.svg'
import imgLogo from '../../../../assets/images/logo_footer.svg'
import imgFacebook from '../../../../assets/images/facebook.svg'
import imgTwitter from '../../../../assets/images/twitter.svg'
import imgInstagram from '../../../../assets/images/instagram.svg'

class Footer extends Component {

  onHelpCenter = () => {
    this.props.history.push('/help-center')
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
          />
          <FooterTopSectionButton
            image={imgCoin}
            title='Mealpost Coin'
            hasSeparator={true}
          />
          <FooterTopSectionButton
            image={imgGiftCard}
            title='Gift Cards'
            hasSeparator={true}
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
            <a className='footer-middle-link'>Careers</a>
            <a className='footer-middle-link'>Press</a>
            <a className='footer-middle-link'>Unlimited</a>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              HELP
            </div>
            <a className='footer-middle-link'>Payments</a>
            <a className='footer-middle-link'>Shipping</a>
            <a className='footer-middle-link'>FAQ</a>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              CITIES
            </div>
            <a className='footer-middle-link'>San Francisco</a>
            <a className='footer-middle-link'>San Jose</a>
            <a className='footer-middle-link'>Berkely</a>
            <a className='footer-middle-link'>Concord</a>
            <a className='footer-middle-link'>See More...</a>
          </div>

          <div className='div-footer-middle-links-group'>
            <div className='footer-middle-links-header'>
              SOCIAL
            </div>
            <div className='footer-middle-image-links'>
              <a><img src={imgFacebook} alt='facebook'/></a>
              <a><img src={imgTwitter} alt='twitter'/></a>
              <a><img src={imgInstagram} alt='instagram'/></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='div-footer-bottom-container'>
          <div className='div-footer-bottom-links'>
            <a className='footer-bottom-link'>Terms of Service</a>
            <a className='footer-bottom-link'>Privacy</a>
            <a className='footer-bottom-link'>@2018 Mealpost.com</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
