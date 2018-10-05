import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgRadioActive from '../../assets/images/radio_active.svg'
import imgRadioInactive from '../../assets/images/radio_inactive.svg'

class RadioButon extends Component {

  constructor (props) {
    super(props)

    this.state = {
      checked: this.props.checked,
    }
  }

  componentWillReceiveProps({ checked }) {
    this.setState({
      checked: checked,
    })
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
      <div className={ classNames('radio-button', this.props.className) } style={ this.props.style } onClick={ this.onClick }>
        <img className='img-radio-button' src={ this.state.checked ? imgRadioActive : imgRadioInactive } alt='radio'/>
        <span className='span-radio-button'>{ this.props.children }</span>
      </div>
    )
  }
}

export default RadioButon
