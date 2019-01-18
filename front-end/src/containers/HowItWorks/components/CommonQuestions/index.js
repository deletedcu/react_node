import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                Where do you source your ingredients?
              </div>
              <div className='div-question-answer'>
                We work exclusively with local and family-owned farms and businesses who engage eco-friendly processes in procuring only the freshest and highest quality ingredients. We value these relationships and fully understand that meals are only as good as the ingredients that comprise them.
              </div>
              <div className='div-question-title'>
                Deliciously Healthy?
              </div>
              <div className='div-question-answer'>
                We understand how crucial great taste is to the success of eating healthy. We also understand that this ability to create these innovative and nutritious meals is a result of highly trained culinary experts working with only the freshest and highest quality of ingredients.
              </div>
            </div>
            <div className='div-common-questions-pannel right col-12 col-xl-6'>
              <div className='div-question-title'>
                Do you accommodate specific diets?
              </div>
              <div className='div-question-answer'>
                We take pride in the fact that our meals can be tailor-made for those with an assortment of allergies or specific dietary restrictions. Our diverse menu, there are lots of options around which to build delicious and nutritious meals from.
              </div>
              <div className='div-question-title'>
               Are your meals frozen?
              </div>
              <div className='div-question-answer'>
                Not a chance. Our meals are marinated then cooked fresh by top rated local chefs before delivery. Meals are refrigerated and kept in an insulated box during transit. When you are ready to eat, heat up, and enjoy.
              </div>
              <div className='div-question-title'>
                Are your meals pre-portioned?
              </div>
              <div className='div-question-answer'>
                Our pre-portioned, heat-and-serve meals completely remove the guesswork, frustration, and time involved with cooking. No more two-hour forays into the kitchen to prepare and cook the food. No more guessing about your meal’s nutritional content. Spend time with those who matter, and let us take care of dinner.
              </div>
            </div>
          </div>
        </div>
        <div className='div-check-faq-container'>
          <div className='div-check-faq'>
            Have other questions? <Link to='/help-center' className='clickable'>Check out our FAQs</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CommonQuestions
