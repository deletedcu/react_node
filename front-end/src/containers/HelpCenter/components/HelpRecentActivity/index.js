import React, { Component } from 'react'

import './styles.css'

import imgRecommended from '../../../../assets/images/recommended.svg'

class HelpRecentActivity extends Component  {

  constructor (props) {
    super(props)

    this.state = {
      answerOpened: false,
    }
  }

  onOpenAnswer = () => {
    this.setState({
      answerOpened: true,
    })
  }

  render () {
    const { answerOpened } = this.state 
    const { title, question, timestamp, answer } = this.props

    return (
      <div className='help-recent-activity'>
        <div className='help-recent-activity-title'>{title}</div>
        <div className='help-recent-activity-content'>
          <div className='help-recent-activity-question clickable' onClick={this.onOpenAnswer}>{question}</div>
          <div className='help-recent-activity-info'>
            <span>{timestamp}</span>
            <img src={imgRecommended} alt='recommended'/>
          </div>
        </div>
        { answerOpened &&
          <div className='help-recent-activity-answer'>
            {answer}
          </div>
        }
        <div className='help-recent-activity-separator'/>
      </div>
    )
  }
 
}

export default HelpRecentActivity
