import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'
import HelpSearchBar from './components/HelpSearchBar'
import HelpQuestionGrid from './components/HelpQuestionGrid'
import HelpRecentActivityList from './components/HelpRecentActivityList'

import './styles.css'

import imgBanner from '../../assets/images/banner.png'
import { hideSidebar } from '../../redux/actions/sideBar'

class HelpCenter extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onSearchChange = (text) => {

  }

  onNeedHelp = () => {
    
  }

  render () {
    return (
      <div className='div-help-center-container'>
        {/* Banner and Title */}
        <div className='div-help-center-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
          <div className='div-help-center-title'>
            Help Center
          </div>
          <div className='div-help-center-search'>
            <HelpSearchBar onChange={this.onSearchChange}/>
          </div>
        </div>

        {/* Help Center */}
        <div className='div-help-center'>
          <HelpQuestionGrid/>

          <div className='div-separator'/>

          <HelpRecentActivityList/>

          <div className='div-still-need-help'>
            <Button className='btn-need-help' onClick={this.onNeedHelp}>Still Need Help?</Button>
          </div>
        </div>
        
      </div>
    )
  }
}

export default connect()(HelpCenter)
