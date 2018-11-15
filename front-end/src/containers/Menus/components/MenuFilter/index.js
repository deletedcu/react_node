import React, { Component } from 'react'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgCheck from '../../../../assets/images/check.svg'

export const MenuFilterType = {
  Vegetalian: 0,
  UnderCal: 1,
  GlutenFree: 2,
  HighProtein: 3,
  LowFat: 4,
}

class MenuFilter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedFilterTypes: [],
    }
  }

  onToggleFilter = (filterType) => {
    let { selectedFilterTypes } = this.state
    let index = selectedFilterTypes.indexOf(filterType)

    if (index >= 0) {
      // currently checked - should uncheck
      selectedFilterTypes.splice(index, 1)

      this.setState({
        selectedFilterTypes: selectedFilterTypes,
      }, () => {
        this.props.onChangeFilters(this.state.selectedFilterTypes)
      })
    } else {
      // currently unchecked - should check
      selectedFilterTypes.push(filterType)

      this.setState({
        selectedFilterTypes: selectedFilterTypes,
      }, () => {
        this.props.onChangeFilters(this.state.selectedFilterTypes)
      })
    }
  }

  onClearFilters = () => {
    this.setState({
      selectedFilterTypes: [],
    }, () => {
      this.refs.menuFilterDropdown.hide()
      this.props.onChangeFilters(this.state.selectedFilterTypes)
    })
  }

  render () {
    const { selectedFilterTypes } = this.state

    return (
      <Dropdown ref='menuFilterDropdown' className='menu-filter'>
        <DropdownTrigger>
          <div className='menu-filter-dropdown-trigger clickable'>
            <div className='div-filter'/>
          </div>
        </DropdownTrigger>
        <DropdownContent>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.Vegetalian)}}>
            <span>Vegetalian</span>
            { selectedFilterTypes.includes(MenuFilterType.Vegetalian) && <img src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.UnderCal)}}>
            <span>Under 400 Cal</span>
            { selectedFilterTypes.includes(MenuFilterType.UnderCal) && <img src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.GlutenFree)}}>
            <span>Gluten Free</span>
            { selectedFilterTypes.includes(MenuFilterType.GlutenFree) && <img src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.HighProtein)}}>
            <span>High Protein</span>
            { selectedFilterTypes.includes(MenuFilterType.HighProtein) && <img src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.LowFat)}}>
            <span>Low Fat</span>
            { selectedFilterTypes.includes(MenuFilterType.LowFat) && <img src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu-clear clickable' onClick={this.onClearFilters}>
            <span>Clear Filters</span>
          </div>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default MenuFilter
