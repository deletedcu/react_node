import React from 'react'

import './styles.css'

import imgRecommended from '../../../../assets/images/recommended.svg'

const HelpRecentActivity = (props) => {
  return (
    <div className='help-recent-activity'>
      <div className='help-recent-activity-title'>{props.title}</div>
      <div className='help-recent-activity-content'>
        <div className='help-recent-activity-question clickable'>{props.question}</div>
        <div className='help-recent-activity-info'>
          <span>{props.timestamp}</span>
          <img src={imgRecommended} alt='recommended'/>
        </div>
      </div>
      <div className='help-recent-activity-separator'/>
    </div>
  )
}

export default HelpRecentActivity
