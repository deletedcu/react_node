import React, { Component } from 'react'
import LocationSearchField from './components/LocationSearchField'

import './styles.css'

class Home extends Component {

  render () {
    return (
      <div className='div-home-container'>
        <div className='div-banner-container'>
          <div className='div-banner-center'>
            <div className='div-title'>
              FROM CHEF'S KITCHEN TO<br/>
              YOUR DOORSTEP
            </div>
            <LocationSearchField />
          </div>
        </div>

        <div className='div-featured-menu-container'>
        </div>
      </div>
    )
  }
}

export default Home
