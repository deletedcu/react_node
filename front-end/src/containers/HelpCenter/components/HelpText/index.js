import React from 'react'
import ReactHtmlParser from 'react-html-parser'

import './styles.css'

const HelpText = (props) => {
  return (
    <div className='help-text'>
      <span className='help-text-title'>{props.title}</span>
      <div className='help-text-content'>
        { ReactHtmlParser(props.content) }
      </div>
    </div>
  )
}

export default HelpText
