import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import DropdownFooter from './components/DropdownFooter'
import asyncComponent from '../../components/AsyncComponent'
import OverlaySpinner from '../../components/OverlaySpinner'

import './styles/styles.css'

import { initializeNotificationSystem } from '../../services/notification'

const AsyncMenuModal = asyncComponent(() => import('../MenuModal'))
const AsyncComboSliceModal = asyncComponent(() => import('../ComboSliceModal'))

/**
 * Root component, containing routes
 */

class Root extends Component {

  componentDidMount () {
    initializeNotificationSystem(this.refs.notificationSystem)
  }

  render () {
    return (
      <div className='app header-fixed'>
        {/* Header */}
        <Header history={ this.props.history } pathName={ this.props.location.pathname }/>
  
        {/* Body */}
        <div className='app-body'>
          { routes }
        </div>
  
        {/* Footer */}
        <Footer/>
        <DropdownFooter/> {/* For responsive mode */}
  
        {/* Menu Modal */}
        { this.props.menuModal.visible && <AsyncMenuModal /> }

        {/* Combo Slice Modal */}
        { this.props.comboSliceModal.visible && <AsyncComboSliceModal /> }
  
        {/* Notification System */}
        <NotificationSystem ref='notificationSystem' dismissible='click'/>

        <OverlaySpinner visible={ this.props.overlaySpinner.visible }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuModal: state.menuModal,
    comboSliceModal: state.comboSliceModal,
    overlaySpinner: state.overlaySpinner,
  }
}

export default connect(mapStateToProps)(Root)
