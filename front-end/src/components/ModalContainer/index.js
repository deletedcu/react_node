import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

class ModalContainer extends Component {

  componentDidMount () {
    window.document.getElementById('app').parentElement.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.document.getElementById('app').parentElement.style.overflow = 'unset'
    window.document.getElementById('app').parentElement.style.overflowY = 'auto'
  }

  render () {
    return (
      <div className={ classNames('div-modal-container', this.props.className, {'div-modal-container-dark': this.props.darkMode}) } style={ this.props.style }>
        { this.props.children }
      </div>
    )
  }
}

export default ModalContainer
