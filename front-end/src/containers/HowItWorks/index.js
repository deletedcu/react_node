import React, { Component } from 'react'
import { connect } from 'react-redux'
import MealPlan from './components/MealPlan'
import CommonQuestions from './components/CommonQuestions'

import './styles.css'

import imgPlan from '../../assets/images/mealplan.png'
import imgPinPoint from '../../assets/images/pinpoint.svg'
import imgDelivery from '../../assets/images/delivery.svg'
import imgLorry from '../../assets/images/lorry.svg'

class HowItWorks extends Component {

  render () {
    return (
      <div className='div-meal-plans-container'>
        {/* Banner and Title */}
        <div className='div-meal-plans-banner'>
          <div className='div-meal-plans-title'>
            Chef-Inspired meals brought straight to your door.
          </div>
        </div>

        {/* Grey section for zip code */}
        <div className='div-meal-plans-grey-space'/>

        {/* Meal Plans */}
        <div className='div-meal-plans'>
          <div className='div-meal-plans-grid container'>
            {/* Zip code */}
            <div className='div-zip-code-wrapper'>
              <div className='div-separator'/>
              <div className='div-zip-code'>
                <img src={imgPinPoint} alt='pinpoint'/>
                <div>
                  <div className='div-zip-code-description'>DELIVER TO</div>
                  <div className='div-zip-code-info'>ZIP Code: { this.props.user.user.zip }</div>
                </div>
              </div>
            </div>
            {/* Plans */}
            <div className='row'>
              <div className='div-meal-plan-wrapper col-12 col-xl-6'>
                <MealPlan
                  title='Two-Person Plan'
                  subtitle='serves 2'
                  image={ imgPlan }
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
                  image={ imgPlan }
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

        {/* Info */}
        <div className='div-meal-plans-info'>
          <div className='div-meal-plans-info-text'>
            <div className='div-meal-plans-info-title'>Chef-Crafted Meals</div>
            <div className='div-meal-plans-info-content'>Our chefs create dishes using all-natural, locally sourced ingredients.</div>
          </div>
          <div className='div-meal-plans-info-image'>
            <img src={imgDelivery} alt='delivery'/>
          </div>
          <div className='div-meal-plans-info-text'>
            <div className='div-meal-plans-info-title'>Direct Delivery</div>
            <div className='div-meal-plans-info-content'>Meals are crafted from only the finest ingredients and delivered fresh right to your door.</div>
          </div>
          <div className='div-meal-plans-info-image'>
            <img src={imgLorry} alt='lorry'/>
          </div>
          <div className='div-meal-plans-info-text'>
            <div className='div-meal-plans-info-title'>Never worry about clean up</div>
            <div className='div-meal-plans-info-content'>Your meals are already assembled and ready to consume. Just reheat, sit back and Enjoy.</div>
          </div>
        </div>

        {/* Common Questions */}
        <CommonQuestions/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(HowItWorks)
