import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class MealPreferenceOption extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selected: props.selected,
    }
  }

  onToggleSelection = () => {
    this.setState({
      selected: !this.state.selected,
    })
  }

  render () {
    const { selected } = this.state
    return (
      <div className='meal-preference-option clickable' onClick={this.onToggleSelection}>
        <div className={classNames('meal-preference-option-circle', {'meal-preference-option-selected': selected})}/>
        <div className='meal-preference-option-text'>{this.props.text}</div>
      </div>
    )
  }
}

export default MealPreferenceOption
