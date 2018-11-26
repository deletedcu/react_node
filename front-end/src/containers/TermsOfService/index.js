import React, { Component } from 'react'
import { connect } from 'react-redux'
import './styles.css'

import { hideSidebar } from '../../redux/actions/sideBar'

class TermsOfService extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  render () {
    return (
      <div className='div-terms-of-service-container'>
        {/* Header - Title */}
        <div className='div-terms-of-service-title'>TERMS & CONDITIONS</div>
  
        {/* Content */}
        <div className='div-terms-of-service-content'>
          <div className='div-terms-of-service-header'>
            <span className='title'>Terms of Service</span>
            <span className='timestamp'>Last Updated: June 13, 2018</span>
          </div>
  
          <div className='div-separator'/>
  
          <div className='div-terms-of-service-body'>
            <div className='div-terms-of-service-paragraph'>Welcome to Mealpost (“MP”). By using our website (“Site”) or placing an order, you accept and agree to be bound by these Terms and Conditions (“Terms and Conditions”) and our Privacy Policy. Use of the Site is only available to users who are 18 years of age or older and reside in the United States, or its possessions AND territories. MP makes NO claims that the Site OR ANY of its content is accessible from outside the United States. Should you access our Site outside of the United States, you do so on your own initiative and are responsible for compliance with local laws.</div>
            <div className='div-terms-of-service-paragraph'>We may update these Terms and Conditions from time to time at our sole discretion. The modified Terms and Conditions will be effective 30 days following posting and you agree to the new posted Terms and Conditions by continuing your use of the Site and/or placing an order. Each time you use the Site or place an order, you reaffirm your acceptance of the then-current Terms and Conditions, and your agreement to be bound hereby. You are responsible for staying informed of any changes and are expected to check this page from time to time so you are aware of any changes. If you do not agree with the modified Terms and Conditions, you should stop using the Site.</div>
            <div className='div-terms-of-service-paragraph'>PLEASE READ THIS AGREEMENT CAREFULLY TO ENSURE THAT YOU UNDERSTAND EACH PROVISION, INCLUDING OUR USE OF YOUR LOCATION INFORMATION. THIS AGREEMENT REQUIRES THE USE OF ARBITRATION ON AN INDIVIDUAL BASIS TO RESOLVE DISPUTES, RATHER THAN JURY TRIALS OR CLASS ACTIONS, AND ALSO LIMITS THE REMEDIES AVAILABLE TO YOU IN THE EVENT OF A DISPUTE.</div>
            
            <div className='div-terms-of-service-subtitle'>ELIGIBILITY</div>
            <div className='div-terms-of-service-paragraph'>By using our Site, you represent that you have reached the age of majority where you live and that you have the legal ability to accept these Terms and Conditions and to use the Site in accordance with these Terms and Conditions.</div>
            
            <div className='div-terms-of-service-subtitle'>IMPORTANT HEALTH INFORMATION</div>
            <div className='div-terms-of-service-paragraph'>People with certain conditions MUST HAVE physician approval prior to ordering any MP consumable goods; these include, but are not limited to people who: (a) are pregnant, (b) have anorexia or bulimia, (c) have chronic kidney disease, (d) children under 17 years old, or (e) nursing mothers. People with these or any other serious health conditions must seek physician approval before ordering any MP consumables.</div>
            
            <div className='div-terms-of-service-subtitle'>NUTRITION INFORMATION</div>
            <div className='div-terms-of-service-paragraph'>Please note that nutritional information on our site reflects recent updates to meals based on evolving ingredients. The nutritional information for meals at the time of their preparation is reflected on the labels on our meal containers.</div>
            
            <div className='div-terms-of-service-subtitle'>CREDITS AND REFUNDS</div>
            <div className='div-terms-of-service-paragraph'>If you are not satisfied with a meal for any reason, please contact our customer service team at support@mealpost.io. If you need to cancel your order, we ask that you contact us directly before Friday at 11:59pm for a full refund. Any cancellation made after this time will not be refunded. Unfortunately, we have a strict policy regarding cancelling orders due to the fact that once your order has been placed, we have to proceed to purchase and prepare all meals before they actually get cooked on Saturday. </div>
            
            <div className='div-terms-of-service-subtitle'>PAUSE OR CANCEL A SUBSCRIPTION</div>
            <div className='div-terms-of-service-paragraph'>Following your subscription placement and receipt of your first weekly order, you may pause or cancel a subscription to a Plan at any time online by emailing us at support@mealpost.io. Please note, however, that any amounts charged to or paid by your prior to such pause or cancellation will not be refunded, and a pause or cancellation may not impact any active order for which you have already been charged, depending on the status of the order.</div>
            <div className='div-terms-of-service-paragraph'>You are able to resume subscription and the remaining meals will be delivered weekly according to your plan.</div>
            
            <div className='div-terms-of-service-subtitle'>FOOD SUBSTITUTION POLICY</div>
            <div className='div-terms-of-service-paragraph'>Although MP takes every reasonable measure to have sufficient inventory to fill your order, availability of product(s) may change without notice. MP is not responsible for unavailability of product due to popular demand, whether discontinued or still in production.</div>
            <div className='div-terms-of-service-paragraph'>In the completion of orders, MP reserves the right to substitute a similar product. When making substitutions, MP takes great care to meet the requirements of your particular program or order. Substituted food items may contain different ingredients and allergens than those in items originally ordered. Prior to consumption, please be sure to carefully check all individual product packages for the most updated information regarding ingredients and nutritional content for any/all of MP’s food products, including new and improved items, if you have any food allergies or if you are otherwise concerned about any particular ingredients.</div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(TermsOfService)
