import React from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'
import SettingsMenu from './components/SettingsMenu'
import LazyImage from '../../components/LazyImage'
import './styles.css'

import imgBanner from '../../assets/images/banner.png'

const Settings = (props) => {
  return (
    <div className='div-settings-container'>
      {/* Banner */}
      <div className='div-settings-banner'>
        <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
      </div>

      {/* Main Area */}
      <div className='div-settings-body container'>
        {/* Menu */}
        <div className='div-settings-menu'>
          <SettingsMenu
            location={ props.location }
            history={ props.history }
          />
        </div>

        {/* Page Area */}
        <div className='div-settings-page'>
          { routes }
        </div>
      </div>

      {/* Footer - Contact us */}
      <div className='div-settings-contact'>
        Need help? Visit the&nbsp;
        <Link to='/home'><span>Help Center</span></Link>
        &nbsp;or&nbsp;
        <Link to='/contact-us'><span>Contact Us</span></Link>
      </div>
    </div>
  )
}

export default Settings
