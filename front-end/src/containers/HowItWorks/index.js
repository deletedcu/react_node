import React, { Component } from 'react'
import { connect } from 'react-redux'
import MealPlan from './components/MealPlan'
import Quote from './components/Quote'
import CommonQuestions from './components/CommonQuestions'

import './styles.css'

import imgPlan from '../../assets/images/mealplan.png'
import { beginPricingMode } from '../../redux/actions/pricing'

class HowItWorks extends Component {

  onSelectPlan = (mealCount) => {
    this.props.dispatch(beginPricingMode(mealCount))

    if (this.props.user.loggedIn) {
      this.props.history.push('/menus')
    } else {
      this.props.history.push('/auth/signup')
    }
  }

  render () {
    return (
      <div className='div-meal-plans-container'>
        {/* Banner and Title */}
        <div className='div-meal-plans-banner'>
          <div className='div-meal-plans-title'>
            CHOOSE YOUR MEAL COUNT
          </div>
          <div className='div-meal-plans-subtitle'>
            Select how many meals you would like to receive per week. You'll be able to adjust this while choosing your meals.
          </div>
        </div>

        {/* Meal Plans */}
        <div className='div-meal-plans'>
          <div className='div-meal-plans-grid container'>
            {/* Plans */}
            <div className='row'>
              <div className='div-meal-plan-wrapper col-12 col-lg-6'>
                <MealPlan
                  title='Single Plan'
                  mealCount={4}
                  image={ imgPlan }
                  startPrice='9.95'
                  totalPrice='39.90'
                  onClick={() => this.onSelectPlan(4)}
                />
              </div>
              <div className='div-meal-plan-wrapper col-12 col-lg-6'>
                <MealPlan
                  title='Family Plan'
                  mealCount={6}
                  image={ imgPlan }
                  startPrice='9.95'
                  totalPrice='59.70'
                  onClick={() => this.onSelectPlan(6)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className='div-meal-plans-info'>
          <Quote
            quote={`"I just moved into a new home. MP really help saved dinner for my family!"`}
            author='Heather'
          />
          <Quote
            quote={`"Great service for people who really don't have time to cook or simply can't like myself.. #noshame."`}
            author='James'
          />
          <Quote
            quote={`"Absolutely delicious meals, affordable prices, why would order anything else?"`}
            author='Vicky'
          />
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
