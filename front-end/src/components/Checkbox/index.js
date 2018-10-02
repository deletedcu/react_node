import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgRight from '../../assets/images/right.svg'
import imgWrong from '../../assets/images/wrong.svg'

class Checkbox extends Component {

  constructor (props) {
    super(props)

    this.state = {
      checked: false,
    }
  }

  onClick = () => {
    this.setState({
      checked: !this.state.checked,
    }, () => {
      this.props.onCheckChange(this.state.checked)
    })
  }

  render() {
    return (
      <div className={ classNames('checkbox', this.props.className) } style={ this.props.style } onClick={ this.onClick }>
        <img className='img-checkbox' src={ this.state.checked ? imgRight : imgWrong } alt='mark'/>
        <span className='span-checkbox'>{ this.props.children }</span>
      </div>
    )
  }
}

export default Checkbox
