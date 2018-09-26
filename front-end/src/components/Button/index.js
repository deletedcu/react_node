import React, { Component } from 'react'

import './styles.css'

class Button extends Component {

  render() {
    return (
      <button className={ `button ${this.props.className}` } style={ this.props.style } type={ this.props.type } onClick={ this.props.onClick }>
        { this.props.children }
      </button>
    )
  }
}

export default Button
