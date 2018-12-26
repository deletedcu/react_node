import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

class MealPlan extends Component {

  onSelectionChange = (selectedValue) => {

  }

  onGrabOffer = () => {
    
  }

  render () {
    return (
      <div className='div-meal-plan'>
        <div className='div-meal-plan-title'>{ this.props.title }</div>
        <div className='div-meal-plan-subtitle'>
          { this.props.subtitle1 && <span className='span-subtitle1'>{ this.props.subtitle1 }</span> }
          <span className='span-subtitle2'>{ this.props.subtitle2 }</span>
        </div>

        <div className='div-meal-plan-image'>
          <img src={ this.props.image } alt='plan'/>
        </div>

        <div className='div-meal-plan-start-price'>{`Starting at $${this.props.startPrice} per Serving`}</div>

        <div className='div-meal-plan-total-price'>{`$${this.props.totalPrice} + FREE Shipping`}</div>

        <Button className='btn-grab-offer' onClick={ this.onGrabOffer }>SELECT</Button>
      </div>
    )
  }
}

export default MealPlan
