import React from 'react'
import LazyImage from '../../../../components/LazyImage'

import './styles.css'

const ServiceFeature = (props) => {
  return (
    <div className='service-feature'>
      <LazyImage className='img-service-feature' src={ props.image } />
      <div className='div-service-feature-title'>{ props.title }</div>
      <div className='div-service-feature-description'>{ props.description }</div>
    </div>
  )
}

export default ServiceFeature
