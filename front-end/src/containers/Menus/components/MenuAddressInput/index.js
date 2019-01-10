import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgSearch from '../../../../assets/images/search.svg'

class MenuAddressInput extends Component {

  constructor (props) {
    super(props)

    this.state = {
      address: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }


  render () {
    const { address } = this.state

    return (
      <Dropdown ref='addressInputDropdown' className='address-input'>
        <DropdownTrigger>
          <span className='address-input-trigger clickable'>
            { address || 'Enter your address' }
          </span>
        </DropdownTrigger>
        <DropdownContent>
          <div className='div-address-input'>
            <img src={imgSearch} alt='search'/>
            <input name='address' value={address} onChange={this.onChange} placeholder='Enter your address'/>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default MenuAddressInput
