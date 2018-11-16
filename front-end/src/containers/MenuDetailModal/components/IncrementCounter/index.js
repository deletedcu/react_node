import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgLeft from '../../../../assets/images/left_arrow.svg'
import imgRight from '../../../../assets/images/right_arrow.svg'

class IncrementCounter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: 1,
    }
  }

  onDecrement = () => {
    this.setState({
      value: Math.max(parseInt(this.state.value, 10) - 1, 1),
    }, () => {
      this.props.onChange(this.state.value)
    })
  }

  onIncrement = () => {
    this.setState({
      value: parseInt(this.state.value, 10) + 1,
    }, () => {
      this.props.onChange(this.state.value)
    })
  }

  render () {
    return (
      <div className={ classNames('increment-counter', this.props.className) } style={this.props.style}>
        <img className='clickable' src={imgLeft} onClick={ this.onDecrement } alt='left'/>
        <span>{this.state.value}</span>
        <img className='clickable' src={imgRight} onClick={ this.onIncrement } alt='right'/>
      </div>
    )
  }
}

export default IncrementCounter
