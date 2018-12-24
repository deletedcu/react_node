import React, { Component } from 'react'
import HelpRecentActivity from '../HelpRecentActivity'

import './styles.css'

class HelpRecentActivityList extends Component {

  onLoadMore = () => {
    
  }

  render () {
    return (
      <div className='help-recent-activity-list'>
        <div className='help-recent-activity-list-title'>Related Articles</div>
        <div className='help-recent-activity-list-subtitle'>Search for popular help topics:</div>
        <HelpRecentActivity
          question='What is Mealpost?'
          answer="Mealpost is a weekly based meal delivery service that serves fresh, never frozen meals. Our vision is to help individuals grow and achieve their life goals through precise dieting. Ease and Taste doesn't usually go hand in hand, but we're obviously an exception."
          timestamp='Comment added about 9 months ago'
        />
        <HelpRecentActivity
          question='When and Where?'
          answer='Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year. See if we deliver to you.'
          timestamp='Comment added about 9 months ago'
        />
        <HelpRecentActivity
          question='Can I customize my meals?'
          answer="Definitely. Your meals are completely customizable to be exactly how you want it. Mix and Match Meal Plans and Featured Dishes to figure out which format is better for you. Looking for Low Carb meals? Let us know!"
          timestamp='Comment added about 9 months ago'
        />
        <HelpRecentActivity
          question='Ordering Process'
          answer="Once you place an order, expect an email from us with details regarding your delivery. A Mealpost courier will pick up your chilled meals and deliver them directly to your provided address. Can't accept a delivery? Contact us here and let us know ASAP."
          timestamp='Comment added about 9 months ago'
        />
        <HelpRecentActivity
          question='Recyclable Packaging'
          answer="Yes! All of our packaging including our sleeves, bags, and containers are all recyclable!  We are proud to move towards a more sustainability initiative. Mealpost trays are certified compostable by the Biodegradable Products Institute and meet ASTM standards for compostability."
          timestamp='Comment added about 9 months ago'
        />
        <HelpRecentActivity
          question='Are your meals frozen?'
          answer="Not a chance. Our meals are marinated then cooked fresh one night before delivery. Meals are  refridgerated and kept in an insulated box during transit. When you are ready to eat, heat up, and enjoy."
          timestamp='Comment added about 9 months ago'
        />
        <span className='span-more clickable'>See more</span>
      </div>
    )
  }
}

export default HelpRecentActivityList
