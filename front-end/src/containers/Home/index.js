import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import LocationSearchField from './components/LocationSearchField'
import FeaturedMenu from './components/FeaturedMenu'
import HowItWorks from './components/HowItWorks'
import Feedback from './components/Feedback'
import Button from '../../components/Button'
import LazyImage from '../../components/LazyImage'
import BottomForm from './components/BottomForm'

import './styles.css'

import imgBanner from '../../assets/images/banner.png';
import imgOrders from '../../assets/images/menu.gif'
import imgTrack from '../../assets/images/track.gif'
import imgReceive from '../../assets/images/deliver.png'

import { hideSidebar } from '../../redux/actions/sideBar'
import { showModal, ModalType } from '../../redux/actions/modal'

class Home extends Component {

  feedbacks = [
    {
      authorName: 'SAMANTHA',
      feedback: '"Great service for people on the go. Would definitely recommend it to anyone who does not have time to go grocery shopping or cook but still wants a healthy alternative."',
    },
    {
      authorName: 'SEBASTIAN',
      feedback: `"I've never tried meal delivery services before.. really made me a believer."`,
    },
    {
      authorName: 'NOAH',
      feedback: '"My wife and I live busy lifestyles. Having delicious healthy food options on standby definitely helped us."',
    },
    {
      authorName: 'ETHAN',
      feedback: '"Tasty food. Portions are good.. and feeding my kids has literally never been easier."',
    },
  ]

  sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  onViewAllProducts = () => {
    this.props.history.push('/menus')
  }

  onFindFood = () => {
    this.props.history.push('/menus')
  }

  onLearnMore = () => {
    this.props.history.push('/how-it-works')
  }

  onShareExperience = () => {
    if (this.props.user.loggedIn) {
      this.props.dispatch(showModal(ModalType.shareExperienceModal))
    } else {
      this.props.history.push('/auth/signup')
    }
  }

  render () {
    // Just first 4 products for now !!!
    let featuredMenuItems = this.props.products.products.slice(0, 4)
    
    const feedbacks = this.feedbacks.map((feedback, index) => {
      return  <Feedback
                key={index}
                authorName={feedback.authorName}
                feedback={feedback.feedback}
              />
    })

    return (
      <div className='div-home-container'>
        {/* Banner */}
        <div className='div-banner-container'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />

          <div className='div-banner-center'>
            <div className='div-title'>
              FROM CHEF'S KITCHEN TO<br/>
              YOUR DOORSTEP
            </div>
            <LocationSearchField onFindFood={ this.onFindFood } />
          </div>
        </div>

        {/* Featured Menu */}
        <div className='div-featured-menu-container'>
          <div className='div-featured-menus container'>
            <div className='row'>
              {
                featuredMenuItems.map((featuredMenuItem, index) => {
                  return (
                    <div key={index} className='div-featured-menu-wrapper col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3'>
                      <FeaturedMenu 
                        item={featuredMenuItem} 
                        history={this.props.history}
                      />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className='div-how-it-works-container'>
          <div className='div-section-title'>
            HOW IT WORKS
          </div>
          <HowItWorks
            className='how-it-works-order'
            step='Step 1'
            title='Order'
            description='Select from a meticulously designed rotating menu with new options every week.'
            image={ imgOrders }
            imageFirst={ false }
            onLearnMore={ this.onLearnMore }
          />
          <HowItWorks
            className='how-it-works-track'
            step='Step 2'
            title='Track'
            description='Track your order with Mealpost app. Meals are crafted from only the finest ingredients and delivered fresh right to your door.'
            image={ imgTrack }
            imageFirst={ true }
            onLearnMore={ this.onLearnMore }
          />
          <HowItWorks
            className='how-it-works-receive'
            step='Step 3'
            title='Receive'
            description='Your meals are already assembled and ready to consume. Just reheat, Sit back, and Enjoy.'
            image={ imgReceive }
            imageFirst={ false }
            onLearnMore={ this.onLearnMore }
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
            <Slider {...this.sliderSettings}>
              { feedbacks }
            </Slider>
          </div>

          <Button className='btn-share-experience' onClick={this.onShareExperience}>Share Your Experience</Button>
        </div>

        {/* Location Search */}
        <div className='div-bottom-form'>
          <BottomForm
            title='STAY IN TOUCH'
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    products: state.products,
  }
}

export default connect(mapStateToProps)(Home)
