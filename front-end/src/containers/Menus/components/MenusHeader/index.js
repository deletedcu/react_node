import React, { Component } from 'react'

import './styles.css'

import imgSearch from '../../../../assets/images/search.svg'
import imgDownArrow from '../../../../assets/images/down_arrow.svg'

const MenuTypes = {
  'fresh': 1,
  'food': 2,
  'drinks': 3,
}

class MenusHeader extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedType: MenuTypes.fresh,
    }
  }

  onSelectMenuType = (selectedType) => {
    this.setState({
      selectedType: selectedType,
    })
  }

  render () {
    return (
      <div className='div-menus-header-container'>
        <div className='div-menus-header-left'>
          <div className='div-search-container'>
            <input type='text' placeholder='Search Menu'/>
            <img src={imgSearch} alt='search'/>
          </div>

          <div className='div-dropdown-container clickable'>
            <span>Cuisine</span>
            <img src={imgDownArrow} alt='arrow'/>
          </div>
        </div>

        <div className='div-menus-header-right'>
          <div className={'div-menus-type-item clickable ' + (this.state.selectedType === MenuTypes.fresh ? 'bottom-line' : '')} onClick={() => { this.onSelectMenuType(MenuTypes.fresh) }}>
            FRESH
          </div>
          <div className={'div-menus-type-item clickable ' + (this.state.selectedType === MenuTypes.food ? 'bottom-line' : '')} onClick={() => { this.onSelectMenuType(MenuTypes.food) }}>
            FOOD
          </div>
          <div className={'div-menus-type-item clickable ' + (this.state.selectedType === MenuTypes.drinks ? 'bottom-line' : '')} onClick={() => { this.onSelectMenuType(MenuTypes.drinks) }}>
            DRINKS
          </div>
        </div>
      </div>
    )
  }
}

export default MenusHeader
