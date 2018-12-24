import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'
import HelpSearchBar from './components/HelpSearchBar'
import HelpRecentActivityList from './components/HelpRecentActivityList'
import HelpCard from './components/HelpCard'

import './styles.css'

import imgBanner from '../../assets/images/helpcenter_banner.png'
import imgAccountSetting from '../../assets/images/help_accountsetting.png'
import imgGetStarted from '../../assets/images/help_getstarted.png'
import imgPayment from '../../assets/images/help_payment.png'
import { hideSidebar } from '../../redux/actions/sideBar'

class HelpCenter extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onSearchChange = (text) => {

  }

  onNeedHelp = () => {
    this.props.history.push('/contact-us')
  }

  render () {
    return (
      <div className='div-help-center-container'>
        {/* Banner and Title */}
        <div className='div-help-center-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
          <div className='div-help-center-title'>
            Hi. How can we help?
          </div>
          <div className='div-help-center-search'>
            <HelpSearchBar onChange={this.onSearchChange}/>
          </div>
        </div>

        {/* Help Center */}
        <div className='div-help-center'>
          <div className='div-cards'>
            <HelpCard
              image={imgAccountSetting}
              title='Account & Settings'
              subtitle='Adjust your profile settings and Meal preferences'
            />
            <HelpCard
              image={imgGetStarted}
              title='Getting Started'
              subtitle='Explore and Get Started using your New Account'
            />
            <HelpCard
              image={imgPayment}
              title='Payments Info'
              subtitle='Accepted payment methods, and promotions'
            />
          </div>

          <HelpRecentActivityList/>

          <div className='div-still-need-help'>
            <span className='span-need-help'>Still Need Help?</span>
            <Button className='btn-need-help' onClick={this.onNeedHelp}>Contact Us</Button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default connect()(HelpCenter)
