import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

class AboutUsCareerCard extends Component {

  onLearnMore = () => {
    
  }

  render () {
    return (
      <div className='about-us-career-card'>
        <div className='card-title'>{this.props.title}</div>
        <div className='card-description'>{this.props.description}</div>
        <Button onClick={this.onLearnMore}>LEARN MORE</Button>
      </div>
    )
  }
}

export default AboutUsCareerCard
