import React, { Component } from 'react'
import classNames from 'classnames'
import './styles.css'

const SettingsMenuItem = {
  editProfile: 0,
  paymentMethod: 1,
  orderHistory: 2,
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
      default:
        this.props.history.push('/settings/edit_profile')
    }
  }

  render () {
    const { activeItem } = this.state

    return (
      <div className='settings-menu'>
        <div 
          className={ classNames('settings-menu-item', 'clickable', {'settings-menu-item-active': activeItem === SettingsMenuItem.editProfile}) }
          onClick={ () => { this.onClickMenu(SettingsMenuItem.editProfile) } }
        >
          Edit Profile
        </div>

        <div 
          className={ classNames('settings-menu-item', 'clickable', {'settings-menu-item-active': activeItem === SettingsMenuItem.paymentMethod}) }
          onClick={ () => { this.onClickMenu(SettingsMenuItem.paymentMethod) } }
        >
          Payment Method
        </div>

        <div 
          className={ classNames('settings-menu-item', 'clickable', {'settings-menu-item-active': activeItem === SettingsMenuItem.orderHistory}) }
          onClick={ () => { this.onClickMenu(SettingsMenuItem.orderHistory) } }
        >
          Order History
        </div>
      </div>
    )
    
  }
}

export default SettingsMenu
