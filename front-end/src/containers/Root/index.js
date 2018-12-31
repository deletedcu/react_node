import React, { Component, Fragment } from 'react'
import NotificationSystem from 'react-notification-system'
import { connect } from 'react-redux'
import { isMobileOnly } from 'react-device-detect'
import routes from './routes'
import Modal from '../Modals'
import Sidebar from 'react-sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
import SimplifiedFooter from './components/SimplifiedFooter'
import SideCart from '../SideCart'
import DropdownFooter from './components/DropdownFooter'
import OverlaySpinner from '../../components/OverlaySpinner'

import './styles/styles.css'

import { initializeNotificationSystem } from '../../services/notification'
import { authenticateUser } from '../../redux/actions/user'
import { fetchAllProducts } from '../../redux/actions/products'
import { hideSidebar } from '../../redux/actions/sideBar'

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

  onClickBackground = () => {
    if (this.props.sideBar.visible) {
      this.props.dispatch(hideSidebar())
    }
  }

  render () {
    const { history, sideBar, location, overlaySpinner } = this.props
    const shouldShowHeader = !(location.pathname.includes('coming-soon'))
    const shouldShowFooter = !(location.pathname.includes('help-center') || location.pathname.includes('checkout') || location.pathname.includes('auth/signup') || location.pathname.includes('coming-soon'))
    const shouldShowSimplifiedFooter = (location.pathname.includes('auth/login') || location.pathname.includes('auth/forgot-password'))

    return (
      <Sidebar
        sidebar={<SideCart history={history}/>}
        styles={{
          sidebar: {background: 'white', zIndex: '1001', width: isMobileOnly ? '325px' : '375px', transition: 'transform .1s ease-out', WebkitTransition: '-webkit-transform .1s ease-out'},
          content: {zIndex: isMobileOnly ? '0' : '1'},
          overlay: {backgroundColor: isMobileOnly ? 'rgba(0,0,0,0.34)' : 'unset'},
        }}
        transitions={true}
        pullRight={true}
        open={sideBar.visible}
      >
        <div id='app' className='app header-fixed' onClick={this.onClickBackground}>
          { this.state.isChecked &&
            <div>
              {/* Header */}
              { shouldShowHeader &&
                <Header history={history} pathName={location.pathname}/>
              }
        
              {/* Body */}
              <div className='app-body'>
                { routes }
              </div>
        
              {/* Footer */}
              {
                shouldShowFooter &&
                (
                  shouldShowSimplifiedFooter ? 
                  <SimplifiedFooter/> 
                  : 
                  (
                    <Fragment>
                      <Footer history={history}/>
                      <DropdownFooter/>
                    </Fragment>
                  )
                )
              }
              {/* Modal */}
              <Modal history={history} pathName={location.pathname}/>
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
