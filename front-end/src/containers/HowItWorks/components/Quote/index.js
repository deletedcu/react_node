import React from 'react'
import classNames from 'classnames'
import './styles.css'

import imgStar from '../../../../assets/images/star_green.svg'

const Quote = (props) => {
  return (
    <div className={ classNames('quote-container', props.className) } style={props.style}>
      <div className='quote-stars'>
        <img src={imgStar} alt='star'/>
        <img src={imgStar} alt='star'/>
        <img src={imgStar} alt='star'/>
        <img src={imgStar} alt='star'/>
        <img src={imgStar} alt='star'/>
      </div>
      <div className='quote-text'>{props.quote}</div>
      <div className='quote-author'>{props.author}</div>
    </div>
  )
}

export default Quote
