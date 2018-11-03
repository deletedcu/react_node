import React, { Component } from 'react'
import routes from './routes'
import SettingsMenu from './components/SettingsMenu'
import './styles.css'

class Settings extends Component {

  onHelpCenter = () => {

  }

  onContactUs = () => {
    this.props.history.push('/contact-us')
  }

  render () {
    return (
      <div className='div-settings-container'>
        {/* Main Area */}
        <div className='div-settings-body'>
          {/* Menu */}
          <div className='div-settings-menu'>
            <SettingsMenu
              location={ this.props.location }
              history={ this.props.history }
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
          <span className='clickable' onClick={this.onHelpCenter}>Help Center</span>&nbsp;or&nbsp;
          <span className='clickable' onClick={this.onContactUs}>Contact Us</span>
        </div>
      </div>
    )
  }
}

export default Settings
