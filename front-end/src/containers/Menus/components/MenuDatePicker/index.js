import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgLeftArrow from '../../../../assets/images/left_arrow.svg'
import imgRightArrow from '../../../../assets/images/right_arrow.svg'

class MenuDatePicker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      deliveryDate: null,
    }
  }

  onDateChange = (date) => {
    this.setState({
      deliveryDate: date,
    })
  }

  onClickDeliveryDate = () => {

  }

  onPrevDate = () => {
    let { deliveryDate } = this.state
    deliveryDate.setDate(deliveryDate.getDate() - 1)

    this.setState({
      deliveryDate: deliveryDate,
    })
  }

  onNextDate = () => {
    let { deliveryDate } = this.state
    deliveryDate.setDate(deliveryDate.getDate() + 1)
    
    this.setState({
      deliveryDate: deliveryDate,
    })
  }

  render () {
    const { deliveryDate } = this.state
    return (
      <div className={classNames('menu-datepicker', this.props.className)} style={this.props.style}>
        <img className='clickable' src={imgLeftArrow} alt='left' onClick={this.onPrevDate}/>
        <Dropdown ref='datePickerDropdown' className='datepicker-dropdown'>
          <DropdownTrigger>
            <span className='span-datepicker clickable'>{ deliveryDate ? `Delivery Day - ${moment(deliveryDate).format('MMM Do')}` : 'Select Delivery Date'}</span>
          </DropdownTrigger>
          <DropdownContent>

          </DropdownContent>
        </Dropdown>
        <img className='clickable' src={imgRightArrow} alt='right' onClick={this.onNextDate}/>
      </div>
    )
  }
}

export default MenuDatePicker
