import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgLeftArrow from '../../../../assets/images/left_arrow.svg'
import imgRightArrow from '../../../../assets/images/right_arrow.svg'
import imgDownArrow from '../../../../assets/images/date_down_arrow.svg'

class MenuDatePicker extends Component {

  constructor (props) {
    super(props)

    let dates = []
    let n = 0
    while(n < 31){
      dates.push(moment(new Date()).add(n, 'days'));
      n++
    }

    this.state = {
      deliveryDate: null,
      dates: dates,
    }
  }

  onDateChange = (date) => {
    this.setState({
      deliveryDate: date,
    })
  }

  onSelectDeliveryDate = (date) => {
    this.setState({
      deliveryDate: date,
    }, () => {
      this.refs.datePickerDropdown.hide()
    })
  }

  onPrevDate = () => {
    const { deliveryDate } = this.state

    if (deliveryDate) {
      this.setState({
        deliveryDate: deliveryDate.add(-1, 'days'),
      })
    }
  }

  onNextDate = () => {
    const { deliveryDate } = this.state
    
    if (deliveryDate) {
      this.setState({
        deliveryDate: deliveryDate.add(1, 'days'),
      })
    }
  }

  render () {
    const { deliveryDate, dates } = this.state
    return (
      <div className={classNames('menu-datepicker', this.props.className)} style={this.props.style}>
        <img className='clickable' src={imgLeftArrow} alt='left' onClick={this.onPrevDate}/>
        <Dropdown ref='datePickerDropdown' className='datepicker-dropdown'>
          <DropdownTrigger>
            <span className='span-datepicker clickable'>{ deliveryDate ? `Delivery Day - ${deliveryDate.format('MMM Do')}` : 'Select Delivery Date'}</span>
          </DropdownTrigger>
          <DropdownContent>
            <div className='div-date-dropdown-content'>
              <div className='div-date-menus'>
                { dates.map((date, index) => {
                  return <div key={index} className='div-date-menu' onClick={()=>this.onSelectDeliveryDate(date)}>{date.format('dddd, MMM D')}</div>
                }) }
              </div>
              <div className='div-date-dropdown-bottom'>
                <div>Scroll for more delivery dates</div>
                <img src={imgDownArrow} alt='down'/>
              </div>
            </div>
            
          </DropdownContent>
        </Dropdown>
        <img className='clickable' src={imgRightArrow} alt='right' onClick={this.onNextDate}/>
      </div>
    )
  }
}

export default MenuDatePicker
