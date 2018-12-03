import React from 'react'
import classNames from 'classnames'
import './styles.css'

const Quote = (props) => {
  return (
    <div className={ classNames('quote-container', props.className) } style={props.style}>
      <div className='quote'>
        "I'd marry @blueapron if I could. We just have a good thing goin' on." - @kaywatt
      </div>
    </div>
  )
}

export default Quote
