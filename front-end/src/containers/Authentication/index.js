import React from 'react'
import { Link } from 'react-router-dom'
import routes from './routes'

import './styles.css'

const Authentication = (props) => {
  return (
    <div className='div-auth-container'>
      {/* Login or Signup */}
      <div className='div-auth-body'>
        { routes }
      </div>

      {/* Contact section */}
      <div className='div-auth-help-contact-container'>
        Need help? Visit the&nbsp;
        <Link to='/home'><span>Help Center</span></Link>
        &nbsp;or&nbsp;
        <Link to='/contact-us'><span>Contact Us</span></Link>
      </div>       
    </div>
  )
}

export default Authentication
