import React, { Component } from 'react'

import './styles.css'

class CommonQuestions extends Component {

  render () {
    return (
      <div className='div-common-question-container'>
        <div className='div-common-question-title'>
          Common Questions  
        </div>
        <div className='div-common-questions container'>
          <div className='row'>
            <div className='div-common-questions-pannel left col-12 col-xl-6'>
              <div className='div-question-title'>
                What is Mealpost exactly?
              </div>
              <div className='div-question-answer'>
                Mealpost is a weekly based meal delivery service that serves fresh, never frozen meals. Our vision is to help individuals grow and achieve their life goals through precise dieting. Ease and Taste doesn't usually go hand in hand, but we're obviously an exception.
              </div>
              <div className='div-question-title'>
                Ordering Process
              </div>
              <div className='div-question-answer'>
                Once you place an order, expect an email from us with details regarding your delivery. A Mealpost courier will pick up your chilled meals and deliver them directly to your provided address. Can't accept a delivery? Contact us here and let us know ASAP.
              </div>
              <div className='div-question-title'>
                Recyclable Packaging
              </div>
              <div className='div-question-answer'>
                Yes! All of our packaging including our sleeves, bags, and containers are all recyclable!  We are proud to move towards a more sustainability initiative. Mealpost trays are certified compostable by the Biodegradable Products Institute and meet ASTM standards for compostability.
              </div>
            </div>
            <div className='div-common-questions-pannel right col-12 col-xl-6'>
              <div className='div-question-title'>
                When and Where do you Deliver?
              </div>
              <div className='div-question-answer'>
                Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year. See if we deliver to you.
              </div>
              <div className='div-question-title'>
                Are your meals frozen?
              </div>
              <div className='div-question-answer'>
                Not a chance. Our meals are marinated then cooked fresh one night before delivery. Meals are  refridgerated and kept in an insulated box during transit. When you are ready to eat, heat up, and enjoy.
              </div>
              <div className='div-question-title'>
                Can I customize my meals?
              </div>
              <div className='div-question-answer'>
                Definitely. Your meals are completely customizable to be exactly how you want it. Mix and Match Meal Plans and Featured Dishes to figure out which format is better for you. Looking for Low Carb meals? Let us know!
              </div>
            </div>
          </div>
        </div>
        <div className='div-check-faq-container'>
          <div className='div-check-faq'>
            Have other questions? <a className='clickable'>Check out our FAQs</a>
          </div>
        </div>
      </div>
    )
  }
}

export default CommonQuestions
