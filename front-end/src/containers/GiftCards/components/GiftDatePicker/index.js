import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'
import DatePicker from 'react-datepicker'

import './styles.css'

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
      calendarHighlighted: false,
    }, () => {
      this.props.onChange(date)
    })
  }

  render () {
    const { date } = this.state
    return (
      <div className={classNames('gift-datepicker', this.props.className)} style={this.props.style}>
        <DatePicker
          className='gift-datepicker-input clickable'
          selected={date}
          onChange={this.onDateChange}
          onClickOutside={this.onClickOutside}
          customInput={<input value={moment(date).format('MM/DD/YYYY')} readOnly={true}/>}
        />
      </div>
    )
  }
}

export default GiftDatePicker
