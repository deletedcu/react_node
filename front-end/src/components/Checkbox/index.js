import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgRoundRight from '../../assets/images/right.svg'
import imgRoundWrong from '../../assets/images/wrong.svg'
import imgSquareRight from '../../assets/images/square_checked.svg'
import imgSquareWrong from '../../assets/images/square_unchecked.svg'

export const CheckboxType = {
  'round': 1,
  'square': 2,
}
class Checkbox extends Component {

  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked,
    }
  }

  componentWillReceiveProps ({ checked }) {
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
    const image = (this.props.type === CheckboxType.round) ? 
                  (this.state.checked ? imgRoundRight : imgRoundWrong) : 
                  (this.state.checked ? imgSquareRight : imgSquareWrong)

    return (
      <div className={ classNames('checkbox', this.props.className) } style={ this.props.style } onClick={ this.onClick }>
        <img className='img-checkbox' src={ image } alt='mark'/>
        <span className='span-checkbox'>{ this.props.children }</span>
      </div>
    )
  }
}

export default Checkbox
