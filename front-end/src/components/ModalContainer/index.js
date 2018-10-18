import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class ModalContainer extends Component {

  componentDidMount () {
    window.document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.document.body.removeAttribute('style')
  }

  render () {
    return (
      <div className={ classNames('div-modal-container', this.props.className) } style={ this.props.style }>
        { this.props.children }
      </div>
    )
  }
}

export default ModalContainer
