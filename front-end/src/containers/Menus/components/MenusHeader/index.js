import React, { Component } from 'react'
import MenuFilter from '../MenuFilter'

import './styles.css'

import imgSearch from '../../../../assets/images/search.svg'

class MenusHeader extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
    }
  }

  onChangeSearchText = (e) => {
    this.setState({
      searchText: e.target.value,
    }, () => {
      this.props.onChangeSearchText(this.state.searchText)
    })
  }

  onChangeFilters = (filters) => {
    this.props.onChangeFilters(filters)
  }

  render () {
    return (
      <div className='div-menus-header-container'>
        <div className='div-menus-header-left'>
          <MenuFilter onChangeFilters={this.onChangeFilters}/>
          <div className='div-recommended clickable'/>
        </div>

        <div className='div-menus-header-right'>
          <div className='div-search-container'>
            <input type='text' placeholder='Search Menu' onChange={ this.onChangeSearchText } value={ this.state.searchText }/>
            <img src={imgSearch} alt='search'/>
          </div>
        </div>
      </div>
    )
  }
}

export default MenusHeader
