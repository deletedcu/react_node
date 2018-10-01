import React, { Component } from 'react'

import './styles.css'

class IncrementCounter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: 1,
    }
  }

  onChange = (e) => {
    this.setState({
      value: (e.target.value === '' || e.target.value > 0) ? e.target.value : 1,
    })
  }

  onDecrement = () => {
    this.setState({
      value: Math.max(parseInt(this.state.value, 10) - 1, 1),
    })
  }

  onIncrement = () => {
    this.setState({
      value: parseInt(this.state.value, 10) + 1,
    })
  }

  render () {
    return (
      <div className={ `div-increment-counter ${this.props.className}` }>
        <span className='clickable' onClick={ this.onDecrement }>-</span>
        <input type='number' min='1' step='1' value={ this.state.value } onChange={ this.onChange }/>
        <span className='clickable' onClick={ this.onIncrement }>+</span>
      </div>
    )
  }
}

export default IncrementCounter
