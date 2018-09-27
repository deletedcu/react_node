import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

import imgArrowRight from '../../../../assets/images/arrow-right.svg'

class HowItWorks extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const imageFirst = this.props.imageFirst
    const image = this.props.image
    const step = this.props.step
    const title = this.props.title
    const description = this.props.description

    if (imageFirst) {
      return (
        <div className='div-how-it-works'>
          <div className='div-how-it-works-left'>
            <img className='img-how-it-works img-responsive' src={image} alt='how-it-works'/>
          </div>
          <div className='div-how-it-works-right'>
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
                <Button className='btn-all-products'>
                  <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='div-how-it-works'>
          <div className='div-how-it-works-left'>
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
                <Button className='btn-all-products'>
                  <span>View All Products</span><img src={imgArrowRight} alt='arrow_right'/>
                </Button>
              </div>
            </div>
          </div>
          <div className='div-how-it-works-right'>
            <img className='img-how-it-works img-responsive' src={image} alt='how-it-works'/>
          </div>
        </div>
      ) 
    }
  }
}

export default HowItWorks
