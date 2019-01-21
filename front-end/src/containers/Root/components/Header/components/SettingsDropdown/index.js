import React, { Component } from 'react'
import classNames from 'classnames'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgTriangle from '../../../../../../assets/images/dropdown_triangle.svg'
import hamburgerMenu from '../../../../../../assets/images/hamburger_menu.svg'
import imgTriangleReverse from '../../../../../../assets/images/dropdown_triangle_reverse.svg'
import imgEditProfile from '../../../../../../assets/images/edit_profile.png'
import imgOrderHistory from '../../../../../../assets/images/order_history.png'
import imgLogout from '../../../../../../assets/images/logout.png'


class SettingsDropdown extends Component {

  constructor (props) {
    super(props) 

    this.state = {
      isShown: false,
    }
  }


  onToggle = (isShown) => {
    this.setState({
      isShown: isShown,
    })
  } 

  onMouseEnter = () => {
    this.refs.settingsDropdown.show()
  }

  onMouseLeave = () => {
    this.refs.settingsDropdown.hide()
  }

  onEditProfile = () => {
    this.refs.settingsDropdown.hide()
    this.props.onEditProfile()
  }

  onOrderHistory = () => {
    this.refs.settingsDropdown.hide()
    this.props.onOrderHistory()
  }

  onLogout = () => {
    this.refs.settingsDropdown.hide()
    this.props.onLogout()
  }

  onLogIn = () => {
    this.refs.settingsDropdown.hide()
    this.props.onLogIn()
  }

  onSignUp = () => {
    this.refs.settingsDropdown.hide()
    this.props.onSignUp()
  }

  onWeeklyMenu = () => {
    this.refs.settingsDropdown.hide()
    this.props.onWeeklyMenu()
  }

  onMealPreferences = () => {
    this.refs.settingsDropdown.hide()
    this.props.onMealPreferences()
  }

  onRedeem = () => {
    this.refs.settingsDropdown.hide()
    this.props.onRedeem()
  }

  onHelp = () => {
    this.refs.settingsDropdown.hide()
    this.props.onHelp()
  }

  onGifts = () => {
    this.refs.settingsDropdown.hide()
    this.props.onGifts()
  }

  onPricing = () => {
    this.refs.settingsDropdown.hide()
    this.props.onPricing()
  }

  render () {
    const { isShown } = this.state
    return (
      <div>
        {this.props.loggedIn &&
          <Dropdown ref='settingsDropdown' className='settings-dropdown' onShow={() => this.onToggle(true)} onHide={() => this.onToggle(false)}>
            <DropdownTrigger>
              <div className='settings-dropdown-trigger desktop clickable' onMouseEnter={this.onMouseEnter}>
                <span className={classNames({'span-highlighted': isShown})}>My Account</span>
                <img src={ isShown ? imgTriangleReverse : imgTriangle } alt='hamburger'/>
              </div>
              <div className='settings-dropdown-trigger mobile clickable' onMouseEnter={this.onMouseEnter}>
                <img src={hamburgerMenu} alt='hamburger' />
              </div>
            </DropdownTrigger>
            <DropdownContent onMouseLeave={this.onMouseLeave}>
              <div className = 'desktop'>
                <div className='div-menu clickable' onClick={ this.onEditProfile }>
                  <img src={imgEditProfile} alt='edit'/>
                  <span>Account Settings</span>
                </div>
                <div className='div-menu clickable' onClick={ this.onOrderHistory }>
                  <img src={imgOrderHistory} alt='history'/>
                  <span>Order History</span>
                </div>
                <div className='div-menu clickable' onClick={ this.onLogout }>
                  <img src={imgLogout} alt='logout'/>
                  <span>Log Out</span>
                </div>
              </div>
              <div className = 'mobile'>
                <div className='div-menu-items'>
                  <div className='div-menu clickable' onClick={ this.onEditProfile }>
                    <span>MY ACCOUNT</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onOrderHistory }>
                    <span>ORDER HISTORY</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onWeeklyMenu }>
                    <span>WEEKLY MENU</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onMealPreferences }>
                    <span>MEAL PREFERENCES</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onRedeem }>
                    <span>REDEEM</span>
                  </div>
                </div>
                <div className='div-menu-last-item clickable' onClick={ this.onLogout }>
                  <span>LOG OUT</span>
                </div>
              </div>
            </DropdownContent>
          </Dropdown>
        }
        {!this.props.loggedIn &&
          <Dropdown ref='settingsDropdown' className='settings-dropdown' onShow={() => this.onToggle(true)} onHide={() => this.onToggle(false)}>
            <DropdownTrigger>
              <div className='settings-dropdown-trigger mobile clickable' onMouseEnter={this.onMouseEnter}>
                <img src={hamburgerMenu} alt='hamburger' />
              </div>
            </DropdownTrigger>
            <DropdownContent onMouseLeave={this.onMouseLeave}>
              <div className='mobile'>
                <div className='div-menu-items'>
                  <div className='div-menu clickable' onClick={ this.onLogIn }>
                    <span>LOG IN</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onSignUp }>
                    <span>SIGN UP</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onWeeklyMenu }>
                    <span>WEEKLY MENU</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onPricing }>
                    <span>PRICING</span>
                  </div>
                  <div className='div-menu clickable' onClick={ this.onGifts }>
                    <span>GIFTS</span>
                  </div>
                  <div className='div-menu-last-item clickable' onClick={ this.onHelp }>
                  <span>HELP & CONTACT</span>
                </div>
                </div>
              </div>
            </DropdownContent>
          </Dropdown>
        }
      </div>
    )
  }
}

export default SettingsDropdown
