import React from 'react'

import './styles.css'

const ServiceFeature = (props) => {
  return (
    <div className='service-feature'>
      <img className='img-service-feature' src={ props.image } alt='feature'/>
      <div className='div-service-feature-title'>{ props.title }</div>
      <div className='div-service-feature-description'>{ props.description }</div>
    </div>
  )
}

export default ServiceFeature
