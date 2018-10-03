import React, { Component } from 'react'
import MenusHeader from './components/MenusHeader'
import MenuItem from './components/MenuItem'

import './styles.css'

class Menus extends Component {

  render () {
    // default 18 items
    const data = Array.apply(null, Array(18))

    return (
      <div className='div-menus-container'>
        {/* Banner and Title */}
        <div className='div-menus-banner'>
          <div className='div-menus-title'>
            MENUS
          </div>
        </div>

        {/* Menus Table */}
        <div className='div-menus'>
          {/* bootstrap - container */}
          <div className='div-menus-grid container'>
            {/* Menus Header */}
            <MenusHeader history={ this.props.history }/>

            {/* Separator Line */}
            <div className='div-menus-separator'/>

            {/* Grid */}
            <div className='row'>
              {data.map((val, index) => 
                <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-6 col-xl-4'>
                  <MenuItem/>
                </div>
              )}
            </div>

            {/* Load More button */}
            <div className='div-load-more clickable'>
              Load More
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menus
