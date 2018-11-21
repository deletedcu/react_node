import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgSearch from '../../../../assets/images/search_gray.svg'

class HelpSearchBar extends Component {

  onChange = (e) => {
    this.props.onChange(e.target.value)
  }

  render () {
    return (
      <div className={classNames('help-search-bar', this.props.className)} style={this.props.style}>
        <input className='input-help-search' type='text' placeholder='Search' onChange={this.onChange}/>
        <img className='img-search' src={imgSearch} alt='search'/>
      </div>
    )
  }
}

export default HelpSearchBar
