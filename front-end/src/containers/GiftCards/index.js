import React, { Component } from 'react'
import LazyImage from '../../components/LazyImage'
import GiftCardGroup from './components/GiftCardGroup'
import GiftCardForm from './components/GiftCardForm'

import './styles.css'
import imgBanner from '../../assets/images/banner_1.png'

class GiftCards extends Component {

  render () {
    return (
      <div className='div-giftcards-container'>
        {/* Banner and Title */}
        <div className='div-giftcards-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
          <div className='div-giftcards-title'>
            Give the gift of Mealpost
            <div className='div-giftcards-subtitle'>Treat your friends and family to most delicious gift of all.</div>
          </div>
        </div>

        {/* Content */}
        <div className='div-giftcards-content'>
          <div className='div-giftcards'>
            <GiftCardGroup/>
          </div>

          <div className='div-giftcard-form'>
            <GiftCardForm/>
          </div>
        </div>

        {/* Bottom note */}
        <div className='div-giftcards-bottom'>
          Gift Cards are non-refundable (unless required by law) and are subject to our Gift Card Terms. Your payment card will be charged at the time of purchase. Add a personalized note, or send them a surprise! Treat your friends and family to the perfect gift of delicious food.
        </div>
      </div>
    )
  }
}

export default GiftCards
