import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showMenuModal } from '../../redux/actions/menuModal'

import './styles.css'

class SelectMeals extends Component {

  onClickMeal = () => {
    this.props.dispatch(showMenuModal({
      id: 99,
      name: 'Chicken Leg Tandoori',
      type: 'menu',
      description: 'Tandoori BBQ All natural chicken leg quarter roasted traditional in clay oven.',
      price: 40,
      calories: 280,
      carbs: 13,
      fat: 21,
      protein: 30,
    }))
  }

  render () {
    let meals = []
    Array.apply(null, Array(4)).forEach((value, index) => {
      meals.push(
        <div key={index} className='col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6' onClick={ this.onClickMeal }>
          <div className='div-meal-item clickable'>
            <div className='div-meal-item-text-container'>
              <div className='div-meal-item-title'>Chicken Leg Tandoori</div>
              <div className='div-meal-item-description'>Tandoori BBQ All natural chicken leg quarter roasted traditional in clay oven.</div>
              <div className='div-meal-item-price'>$40</div>
            </div>
            <div className='div-meal-item-image-container'>
              <img alt='placeholder'/>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className='div-select-meals-container'>
        <div className='container'>
          <div className='row'>
            { meals }
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SelectMeals)
