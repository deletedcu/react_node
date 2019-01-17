import React from 'react'

import './styles.css'

const HelpTabItem = (props) => {
  const { image, title, subtitle, onClick } = props

  return (
    <div className='help-tabitem clickable' onClick={ onClick }>
      <img className='img-tabitem' src={ image } alt='tab'/>
      <div className='help-tabitem-info'>
        <span className='span-title'>{ title }</span>
        <span className='span-subtitle'>{ subtitle }</span>
      </div>
    </div>
  )
}

export default HelpTabItem
