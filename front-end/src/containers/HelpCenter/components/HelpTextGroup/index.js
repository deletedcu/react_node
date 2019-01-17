import React, { Component } from 'react'
import HelpText from '../HelpText'

import './styles.css'

class HelpTextGroup extends Component {

  render () {
    const { image, title, lastUpdated, groupContents } = this.props

    return (
      <div className='help-text-group'>
        <div className='help-text-group-header'>
          <img src={image} alt='help'/>
          <span>{title}</span>
        </div>
        <div className='help-text-group-date'>{`Last Updated: ${lastUpdated}`}</div>
        <div className='help-text-group-content'>
        {
          groupContents.map((groupContent, index) => {
            return (
              <HelpText
                key={index}
                title={groupContent.title}
                content={groupContent.content}
                hasBottomLine={index !== groupContents.length - 1}
              />
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default HelpTextGroup
