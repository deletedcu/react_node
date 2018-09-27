import React from 'react'
import routes from './routes'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/styles.css'

/**
 * Root component, containing routes
 */

const Root = (props) => {
  return (
    <div className='app header-fixed'>
      <Header/>
      <div className='app-body'>
        { routes }
      </div>
      <Footer/>
    </div>
  )
}

export default Root
