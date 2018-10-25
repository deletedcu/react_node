import React from 'react'
import classNames from 'classnames'
import ServiceFeature from '../ServiceFeature'

import './styles.css'

import imgMenus from '../../../../assets/images/login_menus.svg'
import imgCommitment from '../../../../assets/images/login_commitment.svg'
import imgDelivery from '../../../../assets/images/login_delivery.svg'

const ServiceFeatures = (props) => {
  return (
    <div className={classNames('container', 'service-features', props.className)} style={props.style}>
      <div className='row'>
        <div className='col-12 col-md-4 col-lg-4 col-xl-4'>
          <ServiceFeature
            image={ imgMenus }
            title='PERSONALIZED MENUS'
            description="Select from our 2-person or family plans. Tell us your dietary preferences and we'll personalize the menus you receive."
          />
        </div>
        <div className='col-12 col-md-4 col-lg-4 col-xl-4'>
          <ServiceFeature
            image={ imgCommitment }
            title='NO COMMITMENT'
            description="Get your delivery when it's convenient for you. You may skip or cancel at any time."
          />
        </div>
        <div className='col-12 col-md-4 col-lg-4 col-xl-4'>
          <ServiceFeature
            image={ imgDelivery }
            title='CONVENIENT DELIVERY'
            description="Ingredients are carefully packaged in a refrigerated box so food stays fresh even if you're not home when we deliver."
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceFeatures
