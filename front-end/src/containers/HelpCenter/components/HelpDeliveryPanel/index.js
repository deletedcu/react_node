import React, { Component } from 'react'
import HelpText from '../HelpText'

import './styles.css'

import imgDelivery1 from '../../../../assets/images/help-delivery-1.png'

class HelpDeliveryPanel extends Component {

  render () {
    return (
      <div className='help-delivery-panel'>
        <div className='help-delivery-section'>
          <img src={imgDelivery1} alt='delivery'/>
          <div className='help-delivery-content'>
            <HelpText
              title='When do your Deliver?'
              content='Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year.'
            />
            <HelpText
              title='Where do your Deliver?'
              content={`We offer delivery to multiple cities throughout the Bay Area, including major cities: San Francisco, Oakland, Berkeley, Dublin, Pleasanton, Walnut Creek. Visit our <a href='/service-areas'>Service Areas</a> page for more info.`}
            />
            <HelpText
              title='Doorstep Delivery'
              content={`Expect your meals to be delivered between 9 am and 6 pm on Sundays. If there is a delay in service, an MP Representative will reach out and let you know. Mealpost drivers will let you know 15 minutes before arriving to your location. Unable to receive a deliver? <a href='/contact-us'>Let us know asap.</a>`}
            />
            <HelpText
              title='Can you deliver to my workplace?'
              content='Yes! As long as the address falls within our delivery window, we are able to deliver your food to your workplace, or any relevant address. Interested in being a b2b partner? Let us know here.'
            />
            <HelpText
              title='Does Mealpost Ship Orders?'
              content='We currently do not ship meals. We hope to extend our services towards shipping by the end of this year. Stay tuned!'
            />
            <HelpText
              title='Do I need to add gratuity or tip?'
              content={`All tips handed to your driver is completely optional. Our drivers get to keep 100% of the tips you hand them. Want to tip but don't have cash? You can specify the amount you wish to add during the checkout process..`}
            />
            <HelpText
              title='Do I need to be home to receive a delivery?'
              content='Your meals are delivered in an insulated bag that is designed to keep your meals fresh and ensure it will make it to its destination properly. If you are unable to receive your delivery, please let us know in advance and we will be able to reschedule to a more convenient time. Please input any special delivery instructions before checking out.'
            />
            <HelpText
              title='Pick up Locations.'
              content={`We are always expanding our list or partners and pick up locations! Interested in being a pick up partner? <a href='/contact-us'>Contact Us here.</a>`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HelpDeliveryPanel
