import React, { Component } from 'react'
import CareerFilter from '../CareerFilter'

import './styles.css'

class CareerFilters extends Component {

  render () {
    return (
      <div className='career-filters'>
        <span className='career-filters-title'>FILTER BY: </span>
        <CareerFilter type='TEAM'/>
        <CareerFilter type='WORK TYPE'/>
      </div>
    )
  }
}

export default CareerFilters
