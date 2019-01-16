import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

class MealPlan extends Component {

  onGrabOffer = () => {
    this.props.onClick()
  }

  render () {
    const { title, image, mealCount, startPrice, totalPrice } = this.props

    return (
      <div className='div-meal-plan'>
        <div className='div-meal-plan-title'>{ title }</div>
        <div className='div-meal-plan-subtitle'>
          <span className='span-subtitle'>{ `${mealCount} MEALS / WEEK` }</span>
        </div>

        <div className='div-meal-plan-image'>
          <img src={ image } alt='plan'/>
        </div>

        <div className='div-meal-plan-prices'>
          <div className='div-meal-plan-price'>
            <span className='span-price-value'>{`$${startPrice}`}</span>
            <span className='span-price-title'>per serving</span>
          </div>
          <div className='div-meal-plan-price has-separator'>
            <span className='span-price-value'>FREE</span>
            <span className='span-price-title'>Shipping</span>
          </div>
          <div className='div-meal-plan-price'>
            <span className='span-price-value'>{`$${totalPrice}`}</span>
            <span className='span-price-title'>weekly total</span>
          </div>
        </div>

        <Button className='btn-grab-offer' onClick={ this.onGrabOffer }>{`SELECT ${mealCount} MEALS`}</Button>
      </div>
    )
  }
}

export default MealPlan
