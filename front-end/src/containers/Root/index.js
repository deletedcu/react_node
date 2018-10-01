import React from 'react'
import { connect } from 'react-redux'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'
import asyncComponent from '../../components/AsyncComponent'

import './styles/styles.css'


const AsyncMenuModal = asyncComponent(() => import('../MenuModal')) 

/**
 * Root component, containing routes
 */

const Root = (props) => {
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
      { props.menuModal.visible && <AsyncMenuModal /> }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    menuModal: state.menuModal,
  }
}

export default connect(mapStateToProps)(Root)
