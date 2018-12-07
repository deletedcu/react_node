import React, { Component } from 'react'

import './styles.css'

import imgPlus from '../../../../assets/images/plus_green.svg'

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
        <div className='help-recent-activity-content'>
          <div className='help-recent-activity-question clickable' onClick={this.onOpenAnswer}><img src={imgPlus} alt='recommended'/><span>{question}</span></div>
          <div className='help-recent-activity-info'>{timestamp}</div>
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
