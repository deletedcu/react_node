import React, { Component } from 'react'
import './styles.css'

const SettingsMenuItem = {
  editProfile: 0,
  paymentMethod: 1,
  orderHistory: 2,
  mealPreference: 3,
  redeemCredit: 4,
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
        <div 
          className='settings-menu-item clickable'
          onClick={ () => { this.onClickMenu(SettingsMenuItem.editProfile) } }
        >
          <div>Edit Profile</div>
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
    )
    
  }
}

export default SettingsMenu
