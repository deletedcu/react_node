import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'
import HelpSearchBar from './components/HelpSearchBar'
import HelpGeneralPanel from './components/HelpGeneralPanel'
import HelpDeliveryPanel from './components/HelpDeliveryPanel'

import './styles.css'

import imgBanner from '../../assets/images/helpcenter_banner.png'
import { hideSidebar } from '../../redux/actions/sideBar'
import { showModal, ModalType } from '../../redux/actions/modal';

class HelpCenter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedTabIndex: 0,
    }
  }

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onSearchChange = (text) => {

  }
  
  onClickTab = (selectedTabIndex) => {
    this.setState({
      selectedTabIndex: selectedTabIndex,
    })
  }

  onNeedHelp = () => {
    this.props.dispatch(showModal(ModalType.contactUsModal))
  }

  render () {
    const { selectedTabIndex } = this.state

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
          <div className='div-help-center-content container'>
            <div className='div-help-center-header'>
              <span className='span-header-title'>Getting Started</span>
              <div className='div-help-center-header-tabs'>
                <span className={ classNames('span-tab', 'clickable', {'span-tab-selected': selectedTabIndex === 0})} onClick={() => this.onClickTab(0)}>General</span>
                <span className={ classNames('span-tab', 'clickable', {'span-tab-selected': selectedTabIndex === 1})} onClick={() => this.onClickTab(1)}>Delivery</span>
              </div>
            </div>

            { selectedTabIndex === 0 ? 
              <HelpGeneralPanel/>
              :
              <HelpDeliveryPanel/>
            }
          </div>

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
