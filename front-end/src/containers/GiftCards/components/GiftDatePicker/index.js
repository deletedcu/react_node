import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import './styles.css'
import imgCalendar from '../../../../assets/images/calendar.svg'

class GiftDatePicker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
    }
  }

  onDateChange = (date) => {
    this.setState({
      date: date,
    }, () => {
      this.props.onChange(date)
    })
  }

  render () {
    const { date } = this.state
    return (
      <div className={classNames('gift-datepicker', this.props.className)} style={this.props.style}>
        <DatePicker
          className='gift-datepicker-input'
          selected={date}
          onChange={this.onDateChange}
          customInput={<div><span>{moment(date).format('MM/DD/YYYY')}</span><img src={imgCalendar} alt='calendar'/></div>}
        />
      </div>
    )
  }
}

export default GiftDatePicker
