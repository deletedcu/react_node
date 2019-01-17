import React, { Component } from 'react'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'

import './styles.css'
import imgTriangleDown from '../../../../assets/images/dropdown_triangle.svg'
import imgTriangleUp from '../../../../assets/images/dropdown_triangle_up.svg'

class HelpText extends Component {

  constructor (props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  onClick = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render () {
    const { title, content, hasBottomLine } = this.props
    const { open } = this.state

    return (
      <div className={classNames('help-text', 'clickable', {'help-text-underlined': hasBottomLine})} onClick={this.onClick}>
        <div className='help-text-header'>
          <span className='help-text-title'>{title}</span>
          <img className='img-triangle' src={open ? imgTriangleUp : imgTriangleDown} alt='triangle'/>
        </div>
        { 
          open &&
          <div className='help-text-content'>
            { ReactHtmlParser(content) }
          </div>
        }
      </div>
    )
  }
}

export default HelpText
