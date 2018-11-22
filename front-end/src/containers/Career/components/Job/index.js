import React from 'react'
import Button from '../../../../components/Button'

import './styles.css'

const Job = (props) => {
  return (
    <div className='job'>
      <div className='job-detail'>
        <div className='job-title'>{props.title}</div>
        <div>
          <span className='job-location'>{props.location}</span>
          <span className='job-time'>{props.time}</span>
        </div>
      </div>
      <Button className='btn-apply' onClick={props.onApply}>APPLY</Button>
    </div>
  )
}

export default Job
