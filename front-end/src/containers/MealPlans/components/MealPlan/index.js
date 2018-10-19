import React, { Component } from 'react'
import Button from '../../../../components/Button'
import HorizontalSelectionGrid from '../../../../components/HorizontalSelectionGrid'

import './styles.css'

class MealPlan extends Component {

  onSelectionChange = (selectedValue) => {

  }

  onGrabOffer = () => {
    
  }

  render () {
    return (
      <div className='div-meal-plan'>
        <div className='div-meal-plan-title'>
          { this.props.title }
        </div>
        <div className='div-meal-plan-subtitle'>
          { this.props.subtitle }
        </div>
        <div className='div-meal-plan-image'>
          <img src={ this.props.image } alt='plan'/>
        </div>
        <div className='div-meal-plan-recipies'>
          <HorizontalSelectionGrid
            values={ this.props.recipiesPerWeek }
            onSelectionChange={ this.onSelectionChange }
          />
          <div className='div-meal-plan-recipies-title'>
            RECIPESE PER WEEK
          </div>
        </div>
        <div className='div-meal-plan-prices'>
          <div className='div-menu-plan-price'>
            { this.props.prices.perServingOld && <span className='span-menu-plan-price-old-value'>{ this.props.prices.shippingOld }</span> }
            <span className='span-menu-plan-price-value'>{ this.props.prices.perServing }</span>
            <span className='span-menu-plan-price-title'>per serving</span>
          </div>
          <div className='div-menu-plan-price-separator'/>
          <div className='div-menu-plan-price'>
            { this.props.prices.shippingOld && <span className='span-menu-plan-price-old-value'>{ this.props.prices.shippingOld }</span> }
            <span className='span-menu-plan-price-value'>{ this.props.prices.shipping }</span>
            <span className='span-menu-plan-price-title'>shipping</span>
          </div>
          <div className='div-menu-plan-price-separator'/>
          <div className='div-menu-plan-price'>
            { this.props.prices.weeklyTotalOld && <span className='span-menu-plan-price-old-value'>{ this.props.prices.weeklyTotalOld }</span> }
            <span className='span-menu-plan-price-value'>{ this.props.prices.weeklyTotal }</span>
            <span className='span-menu-plan-price-title'>weekly total</span>
          </div>
        </div>
        <Button className='btn-grab-offer' onClick={ this.onGrabOffer }>GRAB THE OFFER</Button>
      </div>
    )
  }
}

export default MealPlan
