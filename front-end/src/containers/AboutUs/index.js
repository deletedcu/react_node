import React, { Component } from 'react'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'

import './styles.css'
import imgBanner from '../../assets/images/bg_about_us.png'
import imgBanner2 from '../../assets/images/bg_about_us_2.png'

class AboutUs extends Component {

  onLearnMore = () => {
    this.props.history.push('/career')
  }

  render () {
    return (
      <div className='div-about-us-container'>
        <div className='div-about-us-content container'>
          <LazyImage className='img-background' src={ imgBanner } disableSpinner={true} />
          <div className='about-us-description'>
            <div className='about-us-description-title'>We work hard to create delicious food that meet your highest standards.</div>
            <div className='about-us-description-content'>All our meals are certified organic, non-GMO, and are free of artificial flavors, colors, additives, and added nitrates. Our menus vary according to the season, but be assured that no matter the season, all meats are antibiotic-free, and when possible, fish is wild-caught. We're very passionate about providing you with the highest quality food from local sources.</div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Farm to table means fresh, so our meals are never frozen and never contain preservatives.</div>
            <div className='about-us-description-content'>We don’t just deliver meals, we work some miracles too.  Northern California produces some of the choicest food in the nation. We diligently source ingredients from a team of dedicated farmers who take extraordinary pride in growing their food organically, sustainably, and humanely. Our talented team of professional chefs are inspired to transform these quality products into delicious, nutritious, and carefully prepared meals for your discerning palate. </div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Packaging that really matter..</div>
            <div className='about-us-description-content'>Sometimes all it takes is a bit of effort from everyone. We are proud to announce that your meals arrive exclusively in unbleached plant fiber-based containers that biodegrade in two to four months at commercial composting facilities. Our Carrying Bags and Sleeves are made of 100% recycled paperboard making it easy for reuse or disposal.</div>
          </div>
          <div className='about-us-description-single'>Pure food, pure nutrition, and purely delicious.</div>
          <LazyImage className='img-background-2' src={imgBanner2} disableSpinner={true} />
          <div className='about-us-description'>
            <div className='about-us-description-title'>Our Mission</div>
            <div className='about-us-description-content'>Ecological, socially responsible, and sustainable business practices are at the heart of everything we do, and our customers come first in every decision we make. We're a team of dedicated perfectionists who developed a better way to eat. Combining farm to table quality and seriously delicious food with customer-centered on-demand convenience – so you can relax and do more of what you love.</div>
          </div>

          <div className='separator'/>

          <div className='about-us-bottom'>
            <div className='about-us-description'>
              <div className='about-us-description-title'>JOIN US</div>
              <div className='about-us-description-content'>Take your talents to the next level and work on projects that actual people use daily. Work alongside talented industry veterans- while helping users find new ways of obtaining clean, healthy, and delicious food. </div>
            </div>
            <Button onClick={this.onLearnMore}>LEARN MORE</Button>
          </div>
          
        </div>
      </div>
    )
  }
}

export default AboutUs
