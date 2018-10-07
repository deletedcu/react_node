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
            <div className='div-common-questions-pannel col-12 col-xl-6'>
              <div className='div-question-title'>
                Do you accommodate specific diets or allergies?
              </div>
              <div className='div-question-answer'>
                We accomodate a variety of dietary preferences - e.g. vegetarians, pescetarians, or if you don't et red meat, fish, shellfish, pork, or lamb - and personalize your menu each week based on your preferences. All of our boxes are assembled in the same processing facility, so we don't recommend ordering Blue Apron if you have a serious food allergy.
              </div>
              <div className='div-question-title'>
                When do you deliver?
              </div>
              <div className='div-question-answer'>
                We deliver all 7 days of the week in most locations.
              </div>
              <div className='div-question-title'>
                Where do you deliver?
              </div>
              <div className='div-question-answer'>
                We deliver to all locations in the continental United States. <a className='clickable'>See if we deliver to you.</a>
              </div>
            </div>
            <div className='div-common-questions-pannel col-12 col-xl-6'>
              <div className='div-question-title'>
                Where do you source your ingredients?
              </div>
              <div className='div-question-answer'>
                The quality and freshness of our ingredients are incredibly important to us, so we work directly with artisanal purveyors and hundreds of family-run farms that support sustainable practices.
              </div>
              <div className='div-question-title'>
                Can I skip my delivery for a particular week?
              </div>
              <div className='div-question-answer'>
                Yes, you can skip any delivery until the order is processed. You can manage your deliveries directly in your account.
              </div>
              <div className='div-question-title'>
                Do I need to be home to accept my delivery?
              </div>
              <div className='div-question-answer'>
                Our refrigerated boxes are packed with ice packs and insulated liners to ensure your ingredients will stay fresh for the full delivery day, even if you're not at home to accept the delivery.
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
