import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

import imgArrowRight from '../../../../assets/images/arrow-right.svg'

class HowItWorks extends Component {

  render () {
    const imageFirst = this.props.imageFirst
    const image = this.props.image
    const step = this.props.step
    const title = this.props.title
    const description = this.props.description

    const textAndButtonContent = (
      <div className='div-how-it-works-center'>
        <div className='div-how-it-works-step'>
          { step }
        </div>
        <div className='div-how-it-works-title'>
          { title }
        </div>
        <div className='div-how-it-works-description'>
          { description }
        </div>
        <div className='div-how-it-works-view-all-products'>
          <Button className='btn-all-products' onClick={ this.props.onViewAllProducts }>
            <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
          </Button>
        </div>
      </div>
    )

    const imageContent = (
      <img className='img-how-it-works img-responsive' src={image} alt='how-it-works'/>
    )

    if (imageFirst) {
      return (
        <div>
          <div className='div-how-it-works'>
            <div className='div-how-it-works-left'>
              { imageContent }
            </div>
            <div className='div-how-it-works-right'>
              { textAndButtonContent }
            </div>
          </div>

          {/* Responsive */}
          <div className='responsive-div-how-it-works'>
            <div className='div-how-it-works-center'>
              <div className='div-how-it-works-step'>
                { step }
              </div>
              { imageContent }
              <div className='div-how-it-works-title'>
                { title }
              </div>
              <div className='div-how-it-works-description'>
                { description }
              </div>
              <div className='div-how-it-works-view-all-products'>
                <Button className='btn-all-products' onClick={ this.props.onViewAllProducts }>
                  <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='div-how-it-works'>
            <div className='div-how-it-works-left'>
              { textAndButtonContent }
            </div>
            <div className='div-how-it-works-right'>
              { imageContent }
            </div>
          </div>

          {/* Responsive */}
          <div className='responsive-div-how-it-works'>
            <div className='div-how-it-works-center'>
              <div className='div-how-it-works-step'>
                { step }
              </div>
              { imageContent }
              <div className='div-how-it-works-title'>
                { title }
              </div>
              <div className='div-how-it-works-description'>
                { description }
              </div>
              <div className='div-how-it-works-view-all-products'>
                <Button className='btn-all-products' onClick={ this.props.onViewAllProducts }>
                  <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) 
    }
  }
}

export default HowItWorks
