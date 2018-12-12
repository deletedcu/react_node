import React, { Component } from 'react'

import './styles.css'

class MealPlanItem extends Component {

  render () {
    return (
      <div className='div-meal-plan-item' onClick={(e)=>e.stopPropagation()}>
        {/* Title */}
        <div className='div-meal-plan-item-title'>Weight Loss</div>
        
        {/* Description */}
        <div className='div-meal-plan-item-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum orci eu leo semper viverra. In eu orci dignissim, porttitor magna eu</div>
        
        {/* Price & Add button */}
        <div className='div-meal-plan-item-bottom'>
          <div className='div-meal-plan-item-price'>
            $54.95
          </div>
          <div className='div-meal-plan-item-add clickable'>
            Add
          </div>
        </div>
      </div>
    )
  }
}

export default MealPlanItem
