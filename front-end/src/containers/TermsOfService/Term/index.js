import React, { Component } from 'react'

import imgDownArrow from '../../../assets/images/down_arrow.svg'
import './styles.css'

class Term extends Component {

  constructor (props) {
    super(props)

    this.state = {
      collapsed: props.collapsed,
    }
  }

  onShowContent = () => {
    this.setState({
      collapsed: false,
    })
  }

  render () {
    const { collapsed } = this.state
    const { title, content } = this.props

    return (
      <div className='term'>
        <div className='term-header clickable' onClick={this.onShowContent}>
          <div className='div-terms-of-service-subtitle'>{title}</div>
          { collapsed && <img className='img-down-arrow' src={imgDownArrow} alt='arrow'/> }
        </div>
        {
          !collapsed &&
          content.map((paragraph, index) => {
            return <div key={index} className='div-terms-of-service-paragraph'>{paragraph}</div>
          })
        }
      </div>
    )
  }
}

export default Term
