import React, { Component } from 'react'
import Slider from 'react-slick'
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
    var sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    }

    var feedbacks = []
    Array.apply(null, Array(4)).forEach((value, index) => {
      feedbacks.push(
        <Feedback
          key={index}
          authorName='John Doe'
          feedback='"Best online food delivery service on the market.It definitely satisfy me. I will order again."'
        />
      )
    })

    // Just random data !!!
    var featuredMenuItems = []
    Array.apply(null, Array(4)).forEach((value, index) => {
      featuredMenuItems.push({
        id: index,
        type: 'menu',
        name: `English Breakfast (${index})`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.',
        price: (55 + index * 5),
        calories: (280 + index * 5),
        carbs: (13 + index),
        fat: (21 + index),
        protein: (30 + index),
      })
    })

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
              {
                featuredMenuItems.map((featuredMenuItem, index) => {
                  return (
                    <div key={index} className='div-featured-menu-wrapper col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                      <FeaturedMenu item={featuredMenuItem} />
                    </div>
                  )
                })
              }
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
            { feedbacks }
          </div>
          <div className='responsive-div-feedbacks'>
            <Slider {...sliderSettings}>
              { feedbacks }
            </Slider>
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
