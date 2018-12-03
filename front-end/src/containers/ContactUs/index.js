import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import LazyImage from '../../components/LazyImage'

import './styles.css'

import imgBanner from '../../assets/images/banner.png'
import { hideSidebar } from '../../redux/actions/sideBar'

import imgThankYou from '../../assets/images/thankyou.svg'

class ContactUs extends Component {

  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',

      messageSent: true,
    }
  }

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      messageSent: true,
    })
  }
  
  onBackHome = () => {
    this.props.history.push('/home')
  }

  render () {
    const { messageSent } = this.state

    return (
      <div className='div-contact-us-container'>
        {/* Banner and Title */}
        <div className='div-contact-us-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />

          <div className='div-contact-us-title'>
            Contact Us
          </div>
        </div>

        {/* Contact Us */}
        <div className='div-contact-us'>
          <div className='container'>
            {/* Title */}
            <div className='div-contact-us-form-title'>
              { !messageSent ? 'Get In Touch' : 'Thank You!' }
            </div>

            {/* Separator Line */}
            <div className='div-contact-us-separator'/>

            {/* Form Or Thank you */}
            { !messageSent ?
            <div className='div-contact-us-form'>
              <form onSubmit={ this.onSubmit }>
                <div className='div-contact-us-form-names'>
                  <div className='div-contact-us-form-firstname'>
                    <div><span>First Name</span></div>
                    <div><input required type='text' name='firstName' value={this.state.firstName} onChange={this.onChange}/></div>
                  </div>
                  <div className='div-contact-us-form-lastname'>
                    <div><span>Last Name</span></div>
                    <div><input required type='text' name='lastName' value={this.state.lastName} onChange={this.onChange}/></div>
                  </div>
                </div>

                <div className='div-contact-us-form-email'>
                  <div><span>Email Address</span></div>
                  <div><input required type='email' name='email' value={this.state.email} onChange={this.onChange}/></div>
                </div>

                <div className='div-contact-us-form-message'>
                  <div><span>Message</span></div>
                  <div><textarea required name='message' value={this.state.message} onChange={this.onChange}/></div>
                </div>

                <div className='div-contact-us-separator'/>

                <Button className='btn-send-message'>Send Message</Button> 
              </form>
            </div>
            :
            <div className='div-contact-us-thankyou'>
              <img src={imgThankYou} alt='thank you'/>
              <div className='div-contact-us-thankyou-text'>Thanks for contact us! We will get back to you as soon as possible</div>
            </div> 
            }

            {/* Back home button */}
            { messageSent && 
              <Button className='btn-back-home' onClick={this.onBackHome}>BACK HOME</Button>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(ContactUs)
