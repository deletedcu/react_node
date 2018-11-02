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
import { authenticateUser } from '../../redux/actions/user'

const AsyncMenuModal = asyncComponent(() => import('../MenuModal'))
const AsyncComboSliceModal = asyncComponent(() => import('../ComboSliceModal'))

/**
 * Root component, containing routes
 */

class Root extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isChecked: false
    }
  }

  componentDidMount () {
    initializeNotificationSystem(this.refs.notificationSystem)

    if (this.props.user.loggedIn === true ) {
      this.setState({
        isChecked: true,
      })
    } else {
      const token = localStorage.getItem('token')
      if (token) {
        this.props.dispatch(authenticateUser(token))
      } else {
        this.setState({
          isChecked: true,
        })
      }
    }
  }

  componentWillReceiveProps ({ user }) {
    if (!user.loggingIn) {
      this.setState({ isChecked: true })
    }
  }

  render () {
    return (
      <div className='app header-fixed'>
        { this.state.isChecked &&
          <div>
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
          </div>
        }
  
        {/* Notification System */}
        <NotificationSystem ref='notificationSystem' dismissible='click'/>

        <OverlaySpinner visible={ this.props.overlaySpinner.visible }/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    menuModal: state.menuModal,
    comboSliceModal: state.comboSliceModal,
    overlaySpinner: state.overlaySpinner,
  }
}

export default connect(mapStateToProps)(Root)
