import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import { isMobileOnly } from 'react-device-detect'
import routes from './routes'
import Modal from '../Modals'
import Sidebar from 'react-sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import SideCart from '../SideCart'
import DropdownFooter from './components/DropdownFooter'
import OverlaySpinner from '../../components/OverlaySpinner'

import './styles/styles.css'

import { initializeNotificationSystem } from '../../services/notification'
import { authenticateUser } from '../../redux/actions/user'
import { fetchAllProducts } from '../../redux/actions/products'

/**
 * Root component, containing routes
 */

class Root extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isChecked: false
    }

    props.dispatch(fetchAllProducts())
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

  componentWillReceiveProps ({ user, location }) {
    if (!user.loggingIn) {
      this.setState({ isChecked: true })
    }
  }

  render () {
    const { history, sideBar, location, overlaySpinner } = this.props

    return (
      <Sidebar
        sidebar={<SideCart history={history}/>}
        styles={{
          sidebar: {background: 'white', zIndex: '1001', width: '375px', transition: 'transform .1s ease-out', WebkitTransition: '-webkit-transform .1s ease-out'},
          content: {zIndex: isMobileOnly ? '0' : '1'},
          overlay: {backgroundColor: isMobileOnly ? 'rgba(0,0,0,0.34)' : 'unset'},
        }}
        transitions={true}
        pullRight={true}
        open={sideBar.visible}
      >
        <div id='app' className='app header-fixed'>
          { this.state.isChecked &&
            <div>
              {/* Header */}
              <Header history={history} pathName={location.pathname}/>
        
              {/* Body */}
              <div className='app-body'>
                { routes }
              </div>
        
              {/* Footer */}
              <Footer history={history}/>
              <DropdownFooter/> {/* For responsive mode */}
        
              {/* Modal */}
              <Modal pathName={location.pathname}/>
            </div>
          }
    
          {/* Notification System */}
          <NotificationSystem ref='notificationSystem' dismissible='click'/>

          <OverlaySpinner visible={ overlaySpinner.visible }/>
        </div>
      </Sidebar>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    cart: state.cart,
    overlaySpinner: state.overlaySpinner,
    sideBar: state.sideBar,
  }
}

export default connect(mapStateToProps)(Root)
