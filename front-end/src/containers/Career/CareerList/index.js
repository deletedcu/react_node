import React, { Component } from 'react'
import LazyImage from '../../../components/LazyImage'
import CareerSearchBar from '../components/CareerSearchBar'
import CareerFilters from '../components/CareerFilters'
import Job from '../components/Job'

import './styles.css'

import imgBanner from '../../../assets/images/career_bg.png'

class CareerList extends Component {

  onSearchCareer = (text) => {

  }

  onApply = (position) => {
    this.props.history.push(`/career/position?type=${position}`)
  }

  render () {
    return (
      <div className='div-career-container'>
        {/* Banner and Title */}
        <div className='div-career-banner'>
          <LazyImage className='img-banner' src={ imgBanner } disableSpinner={true} />
          <div className='div-career-title'>
            <div>Begin your career at</div>
            <div>Mealpost</div>
          </div>
          <div className='div-career-search'>
            <CareerSearchBar onSearch={this.onSearchCareer}/>
          </div>
        </div>

        {/* Careers */}
        <div className='div-career container'>
          <CareerFilters/>

          <div className='div-career-section'>
            <div className='div-career-section-title'>ENGINEERING</div>
            <div className='div-separator'/>
            <Job
              title='Software Engineer, Mobile'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('mobile_software_engineer')}}
            />
            <Job
              title='Front-End Engineer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('front_end_engineer')}}
            />
            <Job
              title='Full-Stack Engineer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('full_stack_engineer')}}
            />
            <Job
              title='Web Developer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('web_developer')}}
            />
          </div>

          <div className='div-career-section'>
            <div className='div-career-section-title'>ACQUISITION</div>
            <div className='div-separator'/>
            <Job
              title='Director of Digital Marketing'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('digital_marketing_director')}}
            />
            <Job
              title='Growth Marketing Analyst - Email'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('growth_marketing_analyst')}}
            />
            <Job
              title='Product Marketing Manager'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('product_marketing_manager')}}
            />
            <Job
              title='Paid Social Analyst'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('paid_social_analyst')}}
            />
          </div>

          <div className='div-career-section'>
            <div className='div-career-section-title'>ACQUISITION</div>
            <div className='div-separator'/>
            <Job
              title='Sr Product Manager'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('senior_product_manager')}}
            />
            <Job
              title='Customer Engagement & Life-Cycle'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{this.onApply('customer_engagement')}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CareerList
