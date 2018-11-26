import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routes from './routes'

import './styles.css'

import { hideSidebar } from '../../redux/actions/sideBar'

class Authentication extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
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
          <Link to='/help-center'><span>Help Center</span></Link>
          &nbsp;or&nbsp;
          <Link to='/contact-us'><span>Contact Us</span></Link>
        </div>       
      </div>
    )
  }
}

export default connect()(Authentication)
