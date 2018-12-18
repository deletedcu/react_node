import React, { Component } from 'react'
import MealPreferenceItem from '../components/MealPreferenceItem'

import './styles.css'

class MealPreference extends Component {

  render () {
    return (
      <div className='div-meal-preference-container'>
        <div className='div-meal-preference-header'>
          Past Orders
        </div>

        <div className='div-meal-preference-items'>
          <MealPreferenceItem
          />
          <MealPreferenceItem
          />
          <MealPreferenceItem
          />
        </div>
      </div>
    )
  }
}

export default MealPreference
