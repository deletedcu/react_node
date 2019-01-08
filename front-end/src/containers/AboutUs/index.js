import React, { Component } from 'react'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'

import './styles.css'
import imgBanner from '../../assets/images/bg_about_us.png'
import imgBanner2 from '../../assets/images/bg_about_us_2.png'

class AboutUs extends Component {

  render () {
    return (
      <div className='div-about-us-container'>
        <div className='div-about-us-content container'>
          <LazyImage className='img-background' src={ imgBanner } disableSpinner={true} />
          <div className='about-us-description'>
            <div className='about-us-description-title'>We work hard to create delicious food that meet your highest standards.</div>
            <div className='about-us-description-content'>All our meals are certified organic, non-GMO, and are free of artificial flavors, colors, additives, added nitrates, and gluten. Our menus vary according to the season, but be assured that no matter the season, all meats are antibiotic-free, and when possible, fish is wild-caught.</div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Farm to table means fresh, so our meals are never frozen and never contain preservatives.</div>
            <div className='about-us-description-content'>Our farm to table meal delivery program is one of the finest available. We don’t just deliver meals, we’re dedicated to providing you with meals that are chef-prepared from the highest quality sustainably sourced, local ingredients. Northern California produces some of the choicest food in the nation. We diligently source ingredients from a team of dedicated farmers who take extraordinary pride in growing their food organically, sustainably, and humanely. Our talented professional chefs are inspired to transform these quality products into delicious, nutritious, carefully prepared meals for your discerning palate. </div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Packaging that really matter..</div>
            <div className='about-us-description-content'>Sometimes all it takes is a bit of effort from everyone. We are proud to announce that your meals arrive exclusively in unbleached plant fiber-based containers that biodegrade in two to four months at commercial composting facilities. Our Carrying Bags and Sleeves are made of 100% recycled paperboard making it easy for reuse or disposal.</div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>We believe in Transparency.</div>
            <div className='about-us-description-content'>Each meal is labeled with an ingredients list, heating instructions, and nutrition facts, curated by our in-house nutritionist.</div>
          </div>
          <div className='about-us-description-single'>Pure food, pure nutrition, and purely delicious, from farm to table.</div>
          <LazyImage className='img-background-2' src={imgBanner2} disableSpinner={true} />
          <div className='about-us-description'>
            <div className='about-us-description-title'>The Vision</div>
            <div className='about-us-description-content'>We’re guided by our customers’ and community’s welfare. We know that nurturing our bodies with nutritious food and nurturing our souls by committing to socially responsible endeavors creates happy consumers and a sustainable environment for the future.</div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Our Thought Process..</div>
            <div className='about-us-description-content'>We are curious to know how other busy people are eating these days. We found that most people are so focused on work and the demands of life that they don’t think about what they’re going to eat until they’re hungry. Waiting until we’re hungry means we don’t always make the best nutritional choices. We wanted to solve that problem, and because we’re serious about health, we knew there had to be a better way for busy people to eat.</div>
          </div>
          <div className='about-us-description'>
            <div className='about-us-description-title'>Combining our shared values and rich backgrounds in technology</div>
            <div className='about-us-description-content'>With our commitment to staying healthy and eating well, it eventually led us to building our own on-demand healthy delivery service, Mealpost. We figured out how to deliver nutritional high end cuisine on demand to hungry customers around the Bay Area. How? We established trusted partnerships with the best purveyors and local chefs. Our engineering team designed our digitized delivery network in order to work in sync with our platform to serve our hungry customer base.</div>
          </div>

          <div className='separator'/>

          <div className='about-us-bottom'>
            <div className='about-us-description'>
              <div className='about-us-description-title'>JOIN US</div>
              <div className='about-us-description-content'>Take your talents to the next level and work on projects that actual people use daily. Work alongside talented industry veterans- while helping users find new ways of obtaining clean, healthy, and delicious food. </div>
            </div>
            <Button>LEARN MORE</Button>
          </div>
          
        </div>
      </div>
    )
  }
}

export default AboutUs
