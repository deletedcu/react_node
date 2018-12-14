import React, { Component } from 'react'
import classNames from 'classnames'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgTriangle from '../../../../../../assets/images/dropdown_triangle.svg'
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

  render () {
    const { isShown } = this.state
    return (
      <Dropdown ref='settingsDropdown' className='settings-dropdown' onShow={() => this.onToggle(true)} onHide={() => this.onToggle(false)}>
        <DropdownTrigger>
          <div className='settings-dropdown-trigger clickable' onMouseEnter={this.onMouseEnter}>
            <span className={classNames({'span-highlighted': isShown})}>My Account</span>
            <img src={ isShown ? imgTriangleReverse : imgTriangle } alt='hamburger'/>
          </div>
        </DropdownTrigger>
        <DropdownContent onMouseLeave={this.onMouseLeave}>
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
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default SettingsDropdown
