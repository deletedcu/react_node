import React, { Component } from 'react'
// import LazyImage from '../../components/LazyImage'
// import GiftCardGroup from './components/GiftCardGroup'
import GiftCardPanel from './components/GiftCardPanel'
import GiftCardForm from './components/GiftCardForm'

import './styles.css'
// import imgBanner from '../../assets/images/banner_1.png'

class GiftCards extends Component {

  render () {
    return (
      <div className='div-giftcards-container'>
        {/* Title */}
        <div className='div-giftcards-banner'>
          <div className='div-giftcards-title'>
            Give the gift of Mealpost
          </div>
          <div className='div-giftcards-subtitle'>
            Treat your friends and family to most delicious gift of all.
          </div>
        </div>

        {/* Content */}
        <div className='div-giftcards-content'>
          <GiftCardPanel/>
          <GiftCardForm/>
        </div>

        {/* Bottom note */}
        {/* <div className='div-giftcards-bottom'>
          Gift Cards are non-refundable (unless required by law) and are subject to our Gift Card Terms. Your payment card will be charged at the time of purchase. Add a personalized note, or send them a surprise! Treat your friends and family to the perfect gift of delicious food.
        </div> */}
      </div>
    )
  }
}

export default GiftCards
