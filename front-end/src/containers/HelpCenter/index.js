import React, { Component } from 'react'
import { connect } from 'react-redux'
import HelpSearchBar from './components/HelpSearchBar'
import HelpTabItem from './components/HelpTabItem'
import HelpTextGroup from './components/HelpTextGroup'

import './styles.css'

import { hideSidebar } from '../../redux/actions/sideBar'
import { showModal, ModalType } from '../../redux/actions/modal'

import imgGettingStarted from '../../assets/images/help-general-1.png'
import imgAccountSettings from '../../assets/images/help-general-2.png'
import imgPaymentInfo from '../../assets/images/help-general-3.png'
import imgDelivery from '../../assets/images/cart.svg'

const TabItems = {
  GettingStarted: 0,
  AccountSettings: 1,
  PaymentInfo: 2,
  Delivery: 3,
}

class HelpCenter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedTabItem: TabItems.GettingStarted,
    }
  }

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onSearchChange = (text) => {

  }
  
  onClickTab = (selectedTabItem) => {
    this.setState({
      selectedTabItem: selectedTabItem,
    })
  }

  onNeedHelp = () => {
    this.props.dispatch(showModal(ModalType.contactUsModal))
  }

  render () {
    const { selectedTabItem } = this.state

    const getStartedGroup = (
      <HelpTextGroup
        key={0}
        image={imgGettingStarted}
        title='Getting Started'
        lastUpdated='June 13, 2018'
        groupContents={[
          {
            title: 'What is Mealpost exactly?',
            content: `Mealpost is a weekly based meal delivery service that serves fresh, never frozen meals. Our vision is to help individuals grow and achieve their life goals through precise dieting. Ease and Taste doesn't usually go hand in hand, but we're obviously an exception.`,
          },
          {
            title: 'Can I customize my meals?',
            content: `Definitely. Your meals are completely customizable to be exactly how you want it. Mix and Match Meal Plans and Featured Dishes to figure out which format is better for you. Looking for Low Carb meals? Let us know!`,
          },
          {
            title: 'When and Where do you Deliver?',
            content: `Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year. <a href='/how-it-works'>See if we deliver to you.</a>`,
          },
          {
            title: 'Are your meals frozen?',
            content: 'Not a chance. Our meals are marinated then cooked fresh one night before delivery. Meals are refrigerated and kept in an insulated box during transit. When you are ready to eat, heat up, and enjoy.',
          }
        ]}
      />
    )

    const accountSettingsGroup = (
      <HelpTextGroup
        key={1}
        image={imgAccountSettings}
        title='Account Settings'
        lastUpdated='June 13, 2018'
        groupContents={[
          {
            title: 'Change your Delivery Address',
            content: `You are able to change your delivery address 24 hours before the scheduled delivery date. To change your delivery address (must be logged in), In the top right corner of your screen, click "My Account" then to <a href='/settings/edit_profile'>Account Settings</a>. From there, click on the "Edit" button.`,
          },
          {
            title: 'Update Your Password',
            content: `To change your existing password, In the top right corner of your screen, click "My Account" then to Account Settings. From there, click on "Update Password". Need help recovering your password? Visit our <a href='/forgot-password'>Password Recovery Page</a>.`,
          },
          {
            title: 'Business Accounts',
            content: `Business Accounts have been preloaded and will have access to early menu releases. Contact your Company Manager for additional access codes, and perks. To view remaining budget, log in to your dashboard <a href='/settings/edit_profile'>here</a>.`,
          },
          {
            title: 'Apply your Meal Preferences',
            content: `Only accounts with past orders will be able to set and define your meal preferences. Leave your opinions as well as special notes to our chefs, to make your meal that much more personalized. To access <a href='/settings/meal_preference'>Meal preferences</a>, navigate to the account settings page, and click on the Meal Preferences Tab.`,
          }
        ]}
      />
    )

    const paymentInfoGroup = (
      <HelpTextGroup
        key={2}
        image={imgPaymentInfo}
        title='Payment Info'
        lastUpdated='June 13, 2018'
        groupContents={[
          {
            title: 'Accepted Payment Methods',
            content: `Mealpost accepts the following payment methods: Credit cards, including American Express, Discover, MasterCard, and Visa. We also accept: PayPal, Apple Pay, MP Gift Cards, any promotional codes given through us.`,
          },
          {
            title: 'Cancelling Your Order',
            content: `You are only able to cancel your order 48 hours before your scheduled delivery date. To cancel your order (must be logged in), In the top right corner of your screen, click "My Account" then to Account Settings. From there, click on the Order History Tab.`,
          },
          {
            title: 'Redeeming a Gift Card',
            content: `To redeem a gift card, visit our <a href='/settings/redeem_credit'>Redeem Page</a> and enter your code. Once applied to your Mealpost Account, the entire amount will be added to your Account Balance. Your balance will never expire and you will be able to use it whenever you want.`,
          },
          {
            title: 'Account Balance',
            content: `Your account balance will be applied automatically to eligible orders during the checkout process. If you don't want to use your account balance on your current order, unselect it as a payment method in checkout.`,
          }
        ]}
      />
    )

    const deliveryGroup = (
      <HelpTextGroup
        key={3}
        image={imgDelivery}
        title='Delivery'
        lastUpdated='June 13, 2018'
        groupContents={[
          {
            title: 'When do your Deliver?',
            content: 'Currently, we deliver Sundays to multiple cities throughout the Bay Area. We plan to open delivery days to 2-3 times a week, and should start to roll out this new schedule sometime this year.',
          },
          {
            title: 'Where do your Deliver?',
            content: `We offer delivery to multiple cities throughout the Bay Area, including major cities: San Francisco, Oakland, Berkeley, Dublin, Pleasanton, Walnut Creek. Visit our <a href='/service-areas'>Service Areas</a> page for more info.`,
          },
          {
            title: 'Doorstep Delivery',
            content: `Expect your meals to be delivered between 9 am and 6 pm on Sundays. If there is a delay in service, an MP Representative will reach out and let you know. Mealpost drivers will let you know 15 minutes before arriving to your location. Unable to receive a deliver? <a href='/contact-us'>Let us know asap.</a>`,
          },
          {
            title: 'Can you deliver to my workplace?',
            content: 'Yes! As long as the address falls within our delivery window, we are able to deliver your food to your workplace, or any relevant address. Interested in being a b2b partner? Let us know here.',
          },
          {
            title: 'Does Mealpost Ship Orders?',
            content: 'We currently do not ship meals. We hope to extend our services towards shipping by the end of this year. Stay tuned!'
          },
          {
            title: 'Do I need to add gratuity or tip?',
            content: `All tips handed to your driver is completely optional. Our drivers get to keep 100% of the tips you hand them. Want to tip but don't have cash? You can specify the amount you wish to add during the checkout process..`,
          },
          {
            title: 'Do I need to be home to receive a delivery?',
            content: 'Your meals are delivered in an insulated bag that is designed to keep your meals fresh and ensure it will make it to its destination properly. If you are unable to receive your delivery, please let us know in advance and we will be able to reschedule to a more convenient time. Please input any special delivery instructions before checking out.'
          },
          {
            title: 'Pick up Locations.',
            content: `We are always expanding our list or partners and pick up locations! Interested in being a pick up partner? <a href='/contact-us'>Contact Us here.</a>`,
          },
        ]}
      />
    )

    let groups = []
    switch (selectedTabItem) {
      case TabItems.GettingStarted:
        groups = [getStartedGroup, accountSettingsGroup, paymentInfoGroup, deliveryGroup]
        break
      case TabItems.AccountSettings:
        groups = [accountSettingsGroup, paymentInfoGroup, deliveryGroup, getStartedGroup]
        break
      case TabItems.PaymentInfo:
        groups = [paymentInfoGroup, deliveryGroup, getStartedGroup, accountSettingsGroup]
        break
      case TabItems.Delivery:
        groups = [deliveryGroup, getStartedGroup, accountSettingsGroup, paymentInfoGroup]
        break
      default:
    }

    return (
      <div className='div-help-center-container'>
        {/* Banner and Title */}
        <div className='div-help-center-banner'>
          <div className='div-help-center-title'>
            SEARCH OUR KNOWLEDGE BASE
          </div>
          <div className='div-help-center-subtitle'>
            Popular topics: <span>Using Meal Preferences, What is Mealpost? Redeeming a Gift Card</span>
          </div>
          <div className='div-help-center-search'>
            <HelpSearchBar onChange={this.onSearchChange}/>
          </div>
        </div>

        {/* Help Center */}
        <div className='div-help-center'>
          <div className='div-help-center-content container'>
            <div className='div-tabs'>
              <HelpTabItem
                image={imgGettingStarted}
                title='Getting Started'
                subtitle='New around here? Start with the basics.'
                onClick={()=> this.onClickTab(TabItems.GettingStarted)}
              />
              <HelpTabItem
                image={imgAccountSettings}
                title='Account Settings'
                subtitle='Adjust your profile and preferences.'
                onClick={()=> this.onClickTab(TabItems.AccountSettings)}
              />
              <HelpTabItem
                image={imgPaymentInfo}
                title='Payment Info'
                subtitle='Learn about plans, payments, gift cards, and more.'
                onClick={()=> this.onClickTab(TabItems.PaymentInfo)}
              />
              <HelpTabItem
                image={imgDelivery}
                title='Delivery'
                subtitle='New around here? Start with the basics.'
                onClick={()=> this.onClickTab(TabItems.Delivery)}
              />
            </div>

            <div className='div-tab-contents'>
              {
                groups
              }
            </div>

          </div>
        </div>
        
      </div>
    )
  }
}

export default connect()(HelpCenter)
