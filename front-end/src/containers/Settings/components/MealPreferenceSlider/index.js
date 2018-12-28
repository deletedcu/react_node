import React, { Component } from 'react'
import Slider from 'rc-slider'

import './styles.css'

class MealPreferenceSlider extends Component {

  constructor (props) {
    super(props)

    this.state = {
      level: 0,
    }
  }

  onChange = (value) => {
    this.setState({
      level: value,
    })
  }
  
  render () {
    return (
      <div className='meal-preference-slider'>
        <div className='slider-title'>{ this.props.title }</div>
        <div className='slider-wrapper'>
          <Slider
            onChange={this.onChange}
          />
          <span className='span-level'>{ this.state.level < 100 ? ("0" + this.state.level).slice(-2) : this.state.level }</span>
        </div>
      </div>
    )
  }
}

export default MealPreferenceSlider
