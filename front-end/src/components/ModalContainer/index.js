import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'

import './styles.css'

import { closeModal } from '../../redux/actions/modal'

class ModalContainer extends Component {

  componentDidMount () {
    window.document.getElementById('app').parentElement.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.document.getElementById('app').parentElement.style.overflow = 'unset'
    window.document.getElementById('app').parentElement.style.overflowY = 'auto'
  }

  onClick = (e) => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <div className={ classNames('div-modal-container', this.props.className, {'div-modal-container-dark': this.props.darkMode}) } style={ this.props.style } onClick={this.onClick}>
        { this.props.children }
      </div>
    )
  }
}

export default connect()(ModalContainer)
