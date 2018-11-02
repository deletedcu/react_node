import React, { Component } from 'react'
import { connect } from 'react-redux'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'
import Button from '../../../../../../components/Button'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'


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
    let { user } = this.props

    return (
      <Dropdown ref='settingsDropdown' className='settings-dropdown'>
        <DropdownTrigger>
          <span className='clickable'>{ user.user.first_name }</span>
        </DropdownTrigger>
        <DropdownContent>
          <div className='div-menu clickable' onClick={ this.onEditProfile }>Edit Profile</div>
          <div className='div-menu clickable' onClick={ this.onPaymentMethod }>Payment Method</div>
          <div className='div-menu clickable' onClick={ this.onOrderHistory }>Order History</div>
          <div className='div-logout'>
            <div className='div-full-name'>{ `${user.user.first_name} ${user.user.last_name}` }</div>
            <Button className='btn-logout' onClick={ this.onLogout }>LOG OUT</Button>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(SettingsDropdown)
