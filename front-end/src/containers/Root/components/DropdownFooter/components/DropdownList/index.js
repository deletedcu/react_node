import React, { Component } from 'react'

import './styles.css'

import imgPlus from '../../../../../../assets/images/plus.svg'

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
    { this.state.isClosed && <img src={imgPlus} alt='plus'/> }
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
