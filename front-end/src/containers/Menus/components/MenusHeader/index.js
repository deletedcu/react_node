import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import MenuFilter from '../MenuFilter'
import MenuDatePicker from '../MenuDatePicker'

import './styles.css'

import imgSearch from '../../../../assets/images/search.svg'
import imgPinPoint from '../../../../assets/images/pinpoint.svg'

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
      <div className={classNames('div-menus-header-container', {'div-menus-header-squizzed': false})}>
        <div className='div-menus-header-left'>
          <MenuFilter onChangeFilters={this.onChangeFilters}/>
          <div className='div-recommended clickable'/>
          <MenuDatePicker />
        </div>

        <div className='div-menus-header-right'>
          <div className='div-zip-code'>
            <img src={imgPinPoint} alt='pinpoint'/>
            <div>
              <div className='div-zip-code-description'>DELIVER TO</div>
              <div className='div-zip-code-info'>ZIP Code: { this.props.zipCode }</div>
            </div>
          </div>
          
          <div className='div-search-container'>
            <input type='text' placeholder='Search Menu' onChange={ this.onChangeSearchText } value={ this.state.searchText }/>
            <img src={imgSearch} alt='search'/>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sideBar: state.sideBar,
  }
}

export default connect(mapStateToProps)(MenusHeader)
