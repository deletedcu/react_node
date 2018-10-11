import React, { Component } from 'react'
import LocationSearchField from './components/LocationSearchField'
import FeaturedMenu from './components/FeaturedMenu'
import HowItWorks from './components/HowItWorks'
import Feedback from './components/Feedback'
import Button from '../../components/Button'

import './styles.css'

import imgArrowRight from '../../assets/images/arrow-right.svg'
import imgOrders from '../../assets/images/menu.png'
import imgTrack from '../../assets/images/track.png'
import imgReceive from '../../assets/images/deliver.png'

class Home extends Component {

  onViewAllProducts = () => {
    this.props.history.push('/menus')
  }

  render () {
    return (
      <div className='div-home-container'>
        {/* Banner */}
        <div className='div-banner-container'>
          <div className='div-banner-center'>
            <div className='div-title'>
              FROM CHEF'S KITCHEN TO<br/>
              YOUR DOORSTEP
            </div>
            <LocationSearchField />
          </div>
        </div>

        {/* Featured Menu */}
        <div className='div-featured-menu-container'>
          <div className='div-section-title'>
            FEATURED MENU
          </div>
          <div className='div-featured-menus container'>
            <div className='row'>
              <div className='div-featured-menu-wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3'>
                <FeaturedMenu />
              </div>
              <div className='div-featured-menu-wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3'>
                <FeaturedMenu />
              </div>
              <div className='div-featured-menu-wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3'>
                <FeaturedMenu />
              </div>
              <div className='div-featured-menu-wrapper col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3'>
                <FeaturedMenu />
              </div>
            </div>
          </div>
          <div className='div-all-products-container'>
            <Button className='btn-all-products' onClick={ this.onViewAllProducts }>
              <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
            </Button>
          </div>
        </div>

        {/* How It Works */}
        <div className='div-how-it-works-container'>
          <div className='div-section-title'>
            HOW IT WORKS
          </div>
          <HowItWorks
            step='Step 1'
            title='Order'
            description='Place order through mealpost app from wide range of restaurants near to you.'
            image={ imgOrders }
            imageFirst={ false }
            onViewAllProducts={ this.onViewAllProducts }
          />
          <HowItWorks
            step='Step 2'
            title='Track'
            description='Track your order with mealpost app. First you will see order preparing then it is sent to via a mealpostman.'
            image={ imgTrack }
            imageFirst={ true }
            onViewAllProducts={ this.onViewAllProducts }
          />
          <HowItWorks
            step='Step 3'
            title='Receive'
            description='Recieve your meal within sometime in your doorstep.'
            image={ imgReceive }
            imageFirst={ false }
            onViewAllProducts={ this.onViewAllProducts }
          />
        </div>

        {/* Feedback */}
        <div className='div-feedback-container'>
          <div className='div-section-title'>
            WE GET PEOPLE TALKING
          </div>
          <div className='div-feedbacks'>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
          </div>
        </div>

        {/* Location Search */}
        <div className='div-location-search'>
          <LocationSearchField />
        </div>
      </div>
    )
  }
}

export default Home
