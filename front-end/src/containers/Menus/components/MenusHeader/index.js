import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgSearch from '../../../../assets/images/search.svg'
import imgDownArrow from '../../../../assets/images/down_arrow.svg'

const MenuTypes = {
  'menu': 1,
  'mealplans': 2,
  'recommended': 3,
}

class MenusHeader extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedType: MenuTypes.menu,
      searchText: '',
    }
  }

  onSelectMenuType = (selectedType) => {
    // this.setState({
    //   selectedType: selectedType,
    // })

    if (selectedType === MenuTypes.mealplans) {
      this.props.history.push('/meal-plans')
    }
  }

  onChangeSearchText = (e) => {
    this.setState({
      searchText: e.target.value,
    })
  }

  render () {
    const selectedType = this.state.selectedType

    return (
      <div className='div-menus-header-container'>
        <div className='div-menus-header-left'>
          <div className='div-search-container'>
            <input type='text' placeholder='Search Menu' onChange={ this.onChangeSearchText } value={ this.state.searchText }/>
            <img src={imgSearch} alt='search'/>
          </div>

          <div className='div-dropdown-container clickable'>
            <span>Cuisine</span>
            <img src={imgDownArrow} alt='arrow'/>
          </div>
        </div>

        <div className='div-menus-header-right'>
          <div className={ classNames('div-menus-type-item clickable', {'bottom-line': selectedType === MenuTypes.menu}) } onClick={() => { this.onSelectMenuType(MenuTypes.menu) }}>
            MENU
          </div>
          <div className={ classNames('div-menus-type-item clickable', {'bottom-line': selectedType === MenuTypes.mealplans}) } onClick={() => { this.onSelectMenuType(MenuTypes.mealplans) }}>
            MEAL PLANS
          </div>
          <div className={ classNames('div-menus-type-item clickable', {'bottom-line': selectedType === MenuTypes.recommended}) } onClick={() => { this.onSelectMenuType(MenuTypes.recommended) }}>
            RECOMMENDED
          </div>
        </div>
      </div>
    )
  }
}

export default MenusHeader
