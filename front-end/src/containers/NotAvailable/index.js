import React from 'react'
import LazyImage from '../../components/LazyImage'

import './styles.css'

import imgBanner from '../../assets/images/banner.png'
import imgNotAvailable from '../../assets/images/unavailable.png'

const NotAvailable = (props) => {
  return (
    <div className='div-not-available-container'>
      <div className='div-banner'>
        <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
      </div>

      <div className='div-not-available-image'>
        <img className='img-not-available' src={ imgNotAvailable } alt='unavailable'/>
      </div>
    </div>
  )
}

export default NotAvailable
