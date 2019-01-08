import React, { Component } from 'react'
import HelpText from '../HelpText'

import './styles.css'

import imgGeneral1 from '../../../../assets/images/help-general-1.png'
import imgGeneral2 from '../../../../assets/images/help-general-2.png'
import imgGeneral3 from '../../../../assets/images/help-general-3.png'

class HelpGeneralPanel extends Component {

  render () {
    return (
      <div className='help-general-panel'>
        <div className='help-general-section'>
          <div className='help-general-image'>
            <img src={imgGeneral1} alt='general'/>
            <span>Welcome to MP</span>
          </div>
          <div className='help-general-content'>
            <HelpText
              title='What is Mealpost exactly?'
              content={`Mealpost is a weekly based meal delivery service that serves fresh, never frozen meals. Our vision is to help individuals grow and achieve their life goals through precise dieting. Ease and Taste doesn't usually go hand in hand, but we're obviously an exception.`}
            />
            <HelpText
              title='Can I customize my meals?'
              content={`Definitely. Your meals are completely customizable to be exactly how you want it. Mix and Match Meal Plans and Featured Dishes to figure out which format is better for you. Looking for Low Carb meals? Let us know!`}
            />
            <HelpText
              title='When and Where do you Deliver?'
              content={`Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year. <a href='/how-it-works'>See if we deliver to you.</a>`}
            />
            <HelpText
              title='Are your meals frozen?'
              content='Not a chance. Our meals are marinated then cooked fresh one night before delivery. Meals are refrigerated and kept in an insulated box during transit. When you are ready to eat, heat up, and enjoy.'
            />
          </div>
        </div>

        <div className='help-general-section'>
          <div className='help-general-image'>
            <img src={imgGeneral2} alt='general'/>
            <span>Account & Settings</span>
          </div>
          <div className='help-general-content'>
            <HelpText
              title='Change your Delivery Address'
              content={`You are able to change your delivery address 24 hours before the scheduled delivery date. To change your delivery address (must be logged in), In the top right corner of your screen, click "My Account" then to <a href='/settings/edit_profile'>Account Settings</a>. From there, click on the "Edit" button.`}
            />
            <HelpText
              title='Update Your Password'
              content={`To change your existing password, In the top right corner of your screen, click "My Account" then to Account Settings. From there, click on "Update Password". Need help recovering your password? Visit our <a href='/forgot-password'>Password Recovery Page</a>.`}
            />
            <HelpText
              title='Business Accounts'
              content={`Business Accounts have been preloaded and will have access to early menu releases. Contact your Company Manager for additional access codes, and perks. To view remaining budget, log in to your dashboard <a href='/settings/edit_profile'>here</a>.`}
            />
            <HelpText
              title='Apply your Meal Preferences'
              content={`Only accounts with past orders will be able to set and define your meal preferences. Leave your opinions as well as special notes to our chefs, to make your meal that much more personalized. To access <a href='/settings/meal_preference'>Meal preferences</a>, navigate to the account settings page, and click on the Meal Preferences Tab.`}
            />
          </div>
        </div>

        <div className='help-general-section no-underline'>
          <div className='help-general-image'>
            <img src={imgGeneral3} alt='general'/>
            <span>Payments Info</span>
          </div>
          <div className='help-general-content'>
            <HelpText
              title='Accepted Payment Methods'
              content={`Mealpost accepts the following payment methods: Credit cards, including American Express, Discover, MasterCard, and Visa. We also accept: PayPal, Apple Pay, MP Gift Cards, any promotional codes given through us.`}
            />
            <HelpText
              title='Cancelling Your Order'
              content={`You are only able to cancel your order 48 hours before your scheduled delivery date. To cancel your order (must be logged in), In the top right corner of your screen, click "My Account" then to Account Settings. From there, click on the Order History Tab.`}
            />
            <HelpText
              title='Redeeming a Gift Card'
              content={`To redeem a gift card, visit our <a href='/settings/redeem_credit'>Redeem Page</a> and enter your code. Once applied to your Mealpost Account, the entire amount will be added to your Account Balance. Your balance will never expire and you will be able to use it whenever you want.`}
            />
            <HelpText
              title='Account Balance'
              content={`Your account balance will be applied automatically to eligible orders during the checkout process. If you don't want to use your account balance on your current order, unselect it as a payment method in checkout.`}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default HelpGeneralPanel
