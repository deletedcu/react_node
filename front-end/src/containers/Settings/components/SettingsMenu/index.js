import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'
import imgDownArrow from '../../../../assets/images/down_arrow.svg'

const SettingsMenuItem = {
  editProfile: 'General',
  paymentMethod: 'Payment Methods',
  orderHistory: 'Order History',
  mealPreference: 'Meal Preference',
  redeemCredit: 'Redeem Credit',
}

class SettingsMenu extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeItem: this.getActiveSettingsMenu(props.location.pathname),
    }
  }

  componentWillReceiveProps ({ location }) {
    this.setState({
      activeItem: this.getActiveSettingsMenu(location.pathname),
    })
  }

  getActiveSettingsMenu = (path) => {
    let activeItem = SettingsMenuItem.editProfile
    
    if (path.includes('order_history')) {
      activeItem = SettingsMenuItem.orderHistory
    } else if (path.includes('payment_method')) {
      activeItem = SettingsMenuItem.paymentMethod
    } else if (path.includes('meal_preference')) {
      activeItem = SettingsMenuItem.mealPreference
    } else if (path.includes('edit_profile')) {
      activeItem = SettingsMenuItem.editProfile
    } else {
      activeItem = SettingsMenuItem.redeemCredit
    }

    return activeItem
  }

  onClickMenu = (clickedMenuItem) => {
    if (this.state.activeItem === clickedMenuItem) {
      return
    }

    this.refs.settingsMenuDropdown.hide()

    switch(clickedMenuItem) {
      case SettingsMenuItem.editProfile:
        this.props.history.push('/settings/edit_profile')
        break
      case SettingsMenuItem.paymentMethod:
        this.props.history.push('/settings/payment_method')
        break
      case SettingsMenuItem.orderHistory:
        this.props.history.push('/settings/order_history')
        break
      case SettingsMenuItem.mealPreference:
        this.props.history.push('/settings/meal_preference')
        break
      default:
        this.props.history.push('/settings/edit_profile')
    }
  }

  render () {
    const { activeItem } = this.state

    return (
      <div className='settings-menu'>
        <div className='settings-menu-regular'>
          <div 
            className='settings-menu-item clickable'
            onClick={ () => { this.onClickMenu(SettingsMenuItem.editProfile) } }
          >
            <div>General</div>
            { activeItem === SettingsMenuItem.editProfile && <div className='settings-menu-item-underline'/> }
          </div>

          <div 
            className='settings-menu-item clickable'
            onClick={ () => { this.onClickMenu(SettingsMenuItem.paymentMethod) } }
          >
            <div>Payment Methods</div>
            { activeItem === SettingsMenuItem.paymentMethod && <div className='settings-menu-item-underline'/> }
          </div>

          <div 
            className='settings-menu-item clickable'
            onClick={ () => { this.onClickMenu(SettingsMenuItem.orderHistory) } }
          >
            <div>Order History</div>
            { activeItem === SettingsMenuItem.orderHistory && <div className='settings-menu-item-underline'/> }
          </div>

          <div 
            className='settings-menu-item clickable'
            onClick={ () => { this.onClickMenu(SettingsMenuItem.mealPreference) } }
          >
            <div>Meal Preference</div>
            { activeItem === SettingsMenuItem.mealPreference && <div className='settings-menu-item-underline'/> }
          </div>
        </div>
        
        <div className='settings-menu-responsive'>
          <Dropdown ref='settingsMenuDropdown' className='settings-menu-dropdown'>
            <DropdownTrigger>
              <div className='settings-menu-dropdown-trigger clickable'>
                <span>{ activeItem }</span>
                <img className='img-downarrow' src={imgDownArrow} alt='arrow'/>
              </div>
            </DropdownTrigger>
            <DropdownContent>
              <div 
              className='settings-menu-item clickable'
              onClick={ () => { this.onClickMenu(SettingsMenuItem.editProfile) } }
              >
                General
              </div>

              <div 
                className='settings-menu-item clickable'
                onClick={ () => { this.onClickMenu(SettingsMenuItem.paymentMethod) } }
              >
                Payment Methods
              </div>

              <div 
                className='settings-menu-item clickable'
                onClick={ () => { this.onClickMenu(SettingsMenuItem.orderHistory) } }
              >
                Order History
              </div>

              <div 
                className='settings-menu-item clickable'
                onClick={ () => { this.onClickMenu(SettingsMenuItem.mealPreference) } }
              >
                Meal Preference
              </div>
            </DropdownContent>
          </Dropdown>
        </div>
      </div>
    )
    
  }
}

export default SettingsMenu
