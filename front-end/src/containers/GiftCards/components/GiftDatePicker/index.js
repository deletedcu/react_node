import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import './styles.css'
import imgCalendar from '../../../../assets/images/calendar.svg'
import imgCalendarHighlight from '../../../../assets/images/calendar_highlight.svg'

class GiftDatePicker extends Component {

  constructor (props) {
    super(props)

    this.state = {
      date: new Date(),
      calendarHighlighted: false,
    }
  }

  onDateChange = (date) => {
    this.setState({
      date: date,
      calendarHighlighted: false,
    }, () => {
      this.props.onChange(date)
    })
  }

  onClickOutside = () => {
    this.setState({
      calendarHighlighted: false,
    })
  }

  onHoverCalendar = () => {
    this.setState({
      calendarHighlighted: true,
    })
  }

  onUnhoverCalendar = () => {
    if (document.getElementsByClassName('react-datepicker-popper').length === 0) {
      this.setState({
        calendarHighlighted: false,
      })
    }
  }

  render () {
    const { date, calendarHighlighted } = this.state
    return (
      <div className={classNames('gift-datepicker', this.props.className)} style={this.props.style}>
        <input value={moment(date).format('MM/DD/YYYY')} readOnly={true}/>
        <DatePicker
          className='gift-datepicker-input clickable'
          selected={date}
          onChange={this.onDateChange}
          onClickOutside={this.onClickOutside}
          customInput={<img src={calendarHighlighted ? imgCalendarHighlight : imgCalendar} alt='calendar' onMouseEnter={this.onHoverCalendar} onMouseLeave={this.onUnhoverCalendar}/>}
        />
      </div>
    )
  }
}

export default GiftDatePicker
