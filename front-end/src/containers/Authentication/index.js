import React, { Component } from 'react'
import routes from './routes'

import './styles.css'

class Authentication extends Component {

  onHelpCenter = () => {

  }

  onContactUs = () => {
    this.props.history.push('/contact-us')
  }

  render () {
    return (
      <div className='div-auth-container'>
        {/* Login or Signup */}
        <div className='div-auth-body'>
          { routes }
        </div>

        {/* Contact section */}
        <div className='div-auth-help-contact-container'>
          Need help? Visit the&nbsp;
          <span className='clickable' onClick={this.onHelpCenter}>Help Center</span>&nbsp;or&nbsp;
          <span className='clickable' onClick={this.onContactUs}>Contact Us</span>
        </div>       
      </div>
    )
  }
}

export default Authentication
