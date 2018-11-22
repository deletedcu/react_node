import React, { Component } from 'react'
import LazyImage from '../../components/LazyImage'
import CareerSearchBar from './components/CareerSearchBar'
import CareerFilters from './components/CareerFilters'
import Job from './components/Job'

import './styles.css'

import imgBanner from '../../assets/images/career_bg.png'

class Career extends Component {

  onSearchCareer = (text) => {

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
              onApply={()=>{}}
            />
            <Job
              title='Front-End Engineer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Full-Stack Engineer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Web Developer'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
          </div>

          <div className='div-career-section'>
            <div className='div-career-section-title'>ACQUISITION</div>
            <div className='div-separator'/>
            <Job
              title='Director of Digital Marketing'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Growth Marketing Analyst - Email'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Product Marketing Manger'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Paid Social Analyst'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
          </div>

          <div className='div-career-section'>
            <div className='div-career-section-title'>ACQUISITION</div>
            <div className='div-separator'/>
            <Job
              title='Sr Product Manager'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
            <Job
              title='Customer Engagement & Life-Cycle'
              location='San Francisco, CA'
              time='Full-Time'
              onApply={()=>{}}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Career
