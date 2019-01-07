import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../../components/LazyImage'
import GiftCardGroup from './components/GiftCardGroup'
import GiftCardPanel from './components/GiftCardPanel'
import GiftCardForm from './components/GiftCardForm'

import './styles.css'
import imgBanner from '../../assets/images/banner_1.png'

class GiftCards extends Component {

  constructor (props) {
    super(props)

    this.state = {
      price: 60,
    }
  }

  onChangePrice = (price) => {
    this.setState({
      price: price,
    })
  }

  onRedeemCode = () => {
    this.props.history.push('/settings/redeem_credit')
  }

  render () {
    return (
      <div>
        {/* Desktop Layout */}
        <div className='div-giftcards-container'>
          {/* Title */}
          <div className='div-giftcards-banner'>
            <div className='div-giftcards-title'>
              GIVE THE GIFT OF MEALPOST
            </div>
            <div className='div-giftcards-subtitle'>
              Whether it's for that special occasion or tough times in life- Mealpost gift cards
              are here for your friends and loved ones. Treat your friends and family to the
              most delicious gift of all.
            </div>
          </div>

          {/* Content */}
          <div className='div-giftcards-content'>
            <GiftCardPanel onChange={this.onChangePrice} onRedeemCode={this.onRedeemCode}/>
            <GiftCardForm/>
          </div>
        </div>

        {/* Mobile Responsive */}
        <div className='responsive-giftcards-container'>
          {/* Banner and Title */}
          <div className='div-giftcards-banner'>
            <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
            <div className='div-giftcards-title'>
              Give the gift of Mealpost
              <div className='div-giftcards-subtitle'>
                Treat your friends and family to most delicious gift of all.
              </div>
            </div>
          </div>

          <div className='div-giftcards-content'>
            {/* Gift Cards */}
            <GiftCardGroup onChange={this.onChangePrice}/>

            {/* Form */}
            <GiftCardForm/>

            {/* Redeem link */}
            <Link to='/settings/redeem_credit' className='link-redeem-code'>Redeem your code.</Link>
          </div>
          
          {/* Bottom note */}
          <div className='div-giftcards-bottom'>
            Gift Cards are non-refundable (unless required by law) and are subject to our Gift Card Terms. Your payment card will be charged at the time of purchase. Add a personalized note, or send them a surprise! Treat your friends and family to the perfect gift of delicious food.
          </div>
        </div>
      </div>
    )
  }
}

export default GiftCards
