import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

import imgLocateMe from '../../../../assets/images/locate_me.svg'

class LocationSearchField extends Component {

  constructor (props) {
    super(props)

    this.state = {
      location: '',
    }
  }

  onLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    })
  }

  onLocateMe = () => {

  }

  onFindFood = () => {

  }

  render () {
    return (
      <div className='div-location-search-container'>
        <input type='text' placeholder='Enter location here' spellCheck='false' value={this.state.location} onChange={this.onLocationChange}/>
        <Button className='btn-locate-me clickable' onClick={ this.onLocateMe }>
          <img src={imgLocateMe} alt='locate'/>
          <span>Locate Me</span>
        </Button>
        <Button onClick={ this.onFindFood }>FIND FOOD</Button>
      </div>
    )
  }
}

export default LocationSearchField
