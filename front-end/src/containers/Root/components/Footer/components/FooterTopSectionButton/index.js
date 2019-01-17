import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class FooterTopSectionButton extends Component {

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render () {
    const { image, title, hasSeparator, ignoreLeftSpace } = this.props

    return (
      <div className='div-footer-top-section-button-container'>
        <div className={classNames('div-footer-top-section-button', 'clickable', {'no-left-margin': ignoreLeftSpace})} onClick={this.onClick}>
          <img src={image} alt='icon'/>
          <span>{ title }</span>
        </div>
        { hasSeparator ? (<span className='div-footer-top-section-button-separator'>|</span>) : null }
      </div>
    )
  }
}

export default FooterTopSectionButton
