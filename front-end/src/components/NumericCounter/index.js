import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class NumericCounter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      count: this.props.count,
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      count: newProps.count,
    })
  }

  onDecrement = () => {
    this.props.onDecrement()
  }

  onIncrement = () => {
    this.props.onIncrement()
  }
  
  render () {
    return (
      <div className={ classNames('numeric-counter', this.props.className) } style={ this.props.style }>
        <span className='numeric-counter-button clickable' onClick={ this.onDecrement }>-</span>
        <span className='numeric-counter-number'>{ this.state.count }</span>
        <span className='numeric-counter-button clickable' onClick={ this.onIncrement }>+</span>
      </div>
    )
  }
}

export default NumericCounter
