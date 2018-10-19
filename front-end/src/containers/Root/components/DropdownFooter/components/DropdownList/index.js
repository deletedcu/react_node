import React, { Component } from 'react'

import './styles.css'

import imgPlus from '../../../../../../assets/images/plus.svg'
import imgMinus from '../../../../../../assets/images/minus.svg'

class DropdownList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isClosed: true,
    }
  }

  onClickHeader = () => {
    this.setState({
      isClosed: !this.state.isClosed,
    })
  }

  render () {
    return (
      <div className='dropdown-list'>
        <div className='dropdown-list-header' onClick={ this.onClickHeader }>
          <span>{ this.props.title }</span>
          <img src={ this.state.isClosed ? imgPlus : imgMinus } alt='plus'/>
        </div>
        
        { !this.state.isClosed && 
          <div className='dropdown-list-content'>
            { this.props.children }
          </div>
        }
      </div>
    )
  }
}

export default DropdownList
