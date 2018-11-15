import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'

import './styles.css'

import imgLeftArrow from '../../../../assets/images/left_arrow.svg'
import imgRightArrow from '../../../../assets/images/right_arrow.svg'

class MenuDatePicker extends Component {

  render () {
    return (
      <div className={classNames('menu-datepicker', this.props.className)} style={this.props.style}>
        <img src={imgLeftArrow} alt='left'/>
        <span>{`Today's Menu - ${moment().format('MMMM Do')}`}</span>
        <img src={imgRightArrow} alt='right'/>
      </div>
    )
  }
}

export default MenuDatePicker
