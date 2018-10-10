import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import asyncComponent from '../../components/AsyncComponent'

import './styles/styles.css'

import { initializeNotificationSystem } from '../../services/notification'

const AsyncMenuModal = asyncComponent(() => import('../MenuModal')) 

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
        <Header/>
  
        {/* Body */}
        <div className='app-body'>
          { routes }
        </div>
  
        {/* Footer */}
        <Footer/>
  
        {/* Menu Modal */}
        { this.props.menuModal.visible && <AsyncMenuModal /> }
  
        <NotificationSystem ref='notificationSystem' dismissible='click'/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuModal: state.menuModal,
  }
}

export default connect(mapStateToProps)(Root)
