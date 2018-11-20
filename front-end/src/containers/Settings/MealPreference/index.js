import React, { Component } from 'react'
import MealPreferenceItem from '../components/MealPreferenceItem'

import './styles.css'

class MealPreference extends Component {

  render () {
    return (
      <div className='div-meal-preference-container'>
          <MealPreferenceItem
            item={{
              main_image: 'no image',
              name: 'Special Herb Grilled Chicken',
              rate: 3,
            }}
          />
          <MealPreferenceItem
            item={{
              main_image: 'no image',
              name: 'Special Herb Grilled Chicken',
              rate: 3,
            }}
          />
          <MealPreferenceItem
            item={{
              main_image: 'no image',
              name: 'Special Herb Grilled Chicken',
              rate: 3,
            }}
          />
      </div>
    )
  }
}

export default MealPreference
