import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

import imgLocateMe from '../../../../assets/images/locate_me.svg'

class LocationSearchField extends Component {
  render () {
    return (
      <div className='div-location-search-container'>
        <input type='text' placeholder='Enter location here' spellCheck='false'/>
        <Button className='btn-locate-me clickable'>
          <img src={imgLocateMe} alt='locate'/>
          <span>Locate Me</span>
        </Button>
        <Button>FIND FOOD</Button>
      </div>
    )
  }
}

export default LocationSearchField
