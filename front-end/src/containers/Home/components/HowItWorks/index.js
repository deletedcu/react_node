import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

class HowItWorks extends Component {

  onLearnMore = () => {
    this.props.onLearnMore()
  }

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
        <Button className='btn-learn-more' onClick={this.onLearnMore}>LEARN MORE</Button>
      </div>
    )

    const imageContent = (
      <img className='img-how-it-works img-responsive' src={image} alt='how-it-works'/>
    )

    const responsiveHowItWorks = (
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
          <Button className='btn-learn-more' onClick={this.onLearnMore}>LEARN MORE</Button>
        </div>
      </div>
    )

    if (imageFirst) {
      return (
        <div className={this.props.className} style={this.props.style}>
          <div className='div-how-it-works'>
            <div className='div-how-it-works-left'>
              { imageContent }
            </div>
            <div className='div-how-it-works-right'>
              { textAndButtonContent }
            </div>
          </div>

          {/* Responsive */}
          { responsiveHowItWorks }
        </div>
      )
    } else {
      return (
        <div className={this.props.className} style={this.props.style}>
          <div className='div-how-it-works'>
            <div className='div-how-it-works-left'>
              { textAndButtonContent }
            </div>
            <div className='div-how-it-works-right'>
              { imageContent }
            </div>
          </div>

          {/* Responsive */}
          { responsiveHowItWorks }
        </div>
      ) 
    }
  }
}

export default HowItWorks
