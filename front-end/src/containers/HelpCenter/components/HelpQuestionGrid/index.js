import React from 'react'

import './styles.css'

const HelpQuestionGrid = (props) => {
  return (
    <div className='help-question-grid'>
      <div className='help-question clickable'>What is Mealpost exactly?</div>
      <div className='help-question clickable'>When & Where?</div>
      <div className='help-question clickable'>Can I customize my meals?</div>
      <div className='help-question clickable'>Packaging and Recycling</div>
      <div className='help-question clickable'>Ordering Process</div>
      <div className='help-question clickable'>Are your meals frozen?</div>
      <div className='help-question clickable'>Managing My Subscription</div>
      <div className='help-question clickable'>Account Setup</div>
      <div className='help-question clickable'>Payment and Promotions</div>
    </div>
  )
}

export default HelpQuestionGrid
