import React, { Component } from 'react'
import MealPlan from './components/MealPlan'
import CommonQuestions from './components/CommonQuestions'
import Quote from './components/Quote'

import './styles.css'

import imgPlan1 from '../../assets/images/mealplan-1.png'
import imgPlan2 from '../../assets/images/mealplan-2.png';

class MenuPlans extends Component {

  render () {
    return (
      <div className='div-meal-plans-container'>
        {/* Banner and Title */}
        <div className='div-meal-plans-banner'>
          <div className='div-meal-plans-title'>
            Meal Plans
          </div>
        </div>

        {/* Meal Plans */}
        <div className='div-meal-plans'>
          <div className='div-meal-plans-grid container'>
            {/* Title */}
            <div className='div-weekly-plans-title'>
              WEEKLY PLANS
            </div>

            {/* Separator Line */}
            <div className='div-meal-plans-separator'/>

            {/* Plans */}
            <div className='row'>
              <div className='div-meal-plan-wrapper col-12 col-xl-6'>
                <MealPlan
                  title='Two-Person Plan'
                  subtitle='serves 2'
                  image={ imgPlan1 }
                  recipiesPerWeek={ [2, 3] }
                  prices={{
                      perServing: '$9.99',
                      shipping: 'FREE',
                      weeklyTotal: '$39.99',
                      weeklyTotalOld: '$59.94',
                    }
                  }
                />
              </div>
              <div className='div-meal-plan-wrapper col-12 col-xl-6'>
                <MealPlan
                  title='Family Plan'
                  subtitle='serves 2'
                  image={ imgPlan2 }
                  recipiesPerWeek={ [4, 5, 6] }
                  prices={{
                    perServing: '$9.99',
                    shipping: 'FREE',
                    weeklyTotal: '$39.99',
                    weeklyTotalOld: '$59.94',
                  }
                }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <Quote/>

        {/* Common Questions */}
        <CommonQuestions/>
      </div>
    )
  }
}

export default MenuPlans
