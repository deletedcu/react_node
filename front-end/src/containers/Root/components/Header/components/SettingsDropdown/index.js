import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgHamburgerMenu from '../../../../../../assets/images/hamburger_menu.svg'
import imgEditProfile from '../../../../../../assets/images/edit_profile.svg'
import imgPaymentMethod from '../../../../../../assets/images/payment_method.svg'
import imgOrderHistory from '../../../../../../assets/images/order_history.svg'
import imgLogout from '../../../../../../assets/images/logout.svg'


class SettingsDropdown extends Component {

  onEditProfile = () => {
    this.refs.settingsDropdown.hide()
  }

  onPaymentMethod = () => {
    this.refs.settingsDropdown.hide()
  }

  onOrderHistory = () => {
    this.refs.settingsDropdown.hide()
  }

  onLogout = () => {
    this.refs.settingsDropdown.hide()
    this.props.onLogout()
  }

  render () {
    return (
      <Dropdown ref='settingsDropdown' className='settings-dropdown'>
        <DropdownTrigger>
          <img className='clickable' src={imgHamburgerMenu} alt='hamburger'/>
        </DropdownTrigger>
        <DropdownContent>
          <div className='div-menu clickable' onClick={ this.onEditProfile }>
            <img src={imgEditProfile} alt='edit'/>
            <span>Edit Profile</span>
          </div>
          <div className='div-menu clickable' onClick={ this.onPaymentMethod }>
            <img src={imgPaymentMethod} alt='payment'/>
            <span>Payment Method</span>
          </div>
          <div className='div-menu clickable' onClick={ this.onOrderHistory }>
            <img src={imgOrderHistory} alt='history'/>
            <span>Order History</span>
          </div>
          <div className='div-menu clickable' onClick={ this.onLogout }>
            <img src={imgLogout} alt='logout'/>
            <span>Log Out</span>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default SettingsDropdown
