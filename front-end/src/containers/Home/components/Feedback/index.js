import React, { Component } from 'react'

import './styles.css'

import imgGreenStar from '../../../../assets/images/star_green.svg'

class Feedback extends Component {

  render () {
    const inlineBlockStyle = {
      display: 'inline-block',
    }

    return (
      <div style={ inlineBlockStyle }>
        <div className='div-feedback'>
          <img className='img-feedback-user' alt='' src={ this.props.authorImage }/>
          <div className='div-feedback-box'>
            <div className='div-feedback-name-star'>
              <div className='div-feedback-name'>
                { this.props.authorName }
              </div>
              <div className='div-feedback-star'>
                <img className='img-star' src={imgGreenStar} alt='star'/>
                <img className='img-star' src={imgGreenStar} alt='star'/>
                <img className='img-star' src={imgGreenStar} alt='star'/>
                <img className='img-star' src={imgGreenStar} alt='star'/>
                <img className='img-star' src={imgGreenStar} alt='star'/>
              </div>
            </div>
            <div className='div-feedback-content'>
              { this.props.feedback }
            </div>
          </div>
        </div>

        {/* Responsive */}
        <div className='responsive-div-feedback'>
          <img className='img-feedback-user' alt=''/>
          <div className='div-feedback-box'>
            <div className='div-feedback-star'>
              <img className='img-star' src={imgGreenStar} alt='star'/>
              <img className='img-star' src={imgGreenStar} alt='star'/>
              <img className='img-star' src={imgGreenStar} alt='star'/>
              <img className='img-star' src={imgGreenStar} alt='star'/>
              <img className='img-star' src={imgGreenStar} alt='star'/>
            </div>
            <div className='div-feedback-name'>
              JOHN SWIPE
            </div>
            <div className='div-feedback-content'>
              "Best online food delivery service on the market.It definitely satisfy me. I will order again."
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
