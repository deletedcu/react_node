import React, { Component } from 'react'
import classNames from 'classnames'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

import 'react-simple-dropdown/styles/Dropdown.css'
import './styles.css'

import imgFilter from '../../../../assets/images/filter_button.svg'
import imgFilterHighlight from '../../../../assets/images/filter_button_highlight.svg'
import imgCheck from '../../../../assets/images/check.svg'
import imgGluten from '../../../../assets/images/filter_gluten_free.png'
import imgHighProtein from '../../../../assets/images/filter_high_protein.png'
import imgLowFat from '../../../../assets/images/filter_low_fat.png'
import imgLowCalory from '../../../../assets/images/filter_low_cal.png'
import imgVegetable from '../../../../assets/images/filter_veg.png'

export const MenuFilterType = {
  Vegetarian: 'Vegetarian',
  UnderCal: 'Under 400cal',
  GlutenFree: 'Gluten-Free',
  HighProtein: 'High Protein',
  LowFat: 'Low Fat',
}

class MenuFilter extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isShown: false,
      selectedFilterTypes: [],
    }
  }

  onShow = () => {
    this.setState({
      isShown: true,
    })
  }

  onHide = () => {
    this.setState({
      isShown: false,
    })
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
    const { selectedFilterTypes, isShown } = this.state

    return (
      <Dropdown ref='menuFilterDropdown' className='menu-filter' onShow={this.onShow} onHide={this.onHide}>
        <DropdownTrigger>
          <div className='menu-filter-dropdown-trigger clickable'>
            <img className='img-filter' src={isShown ? imgFilterHighlight : imgFilter} alt='filter'/>
            <span className={classNames('span-title', {'highlighted': isShown})}>FILTERS</span>
          </div>
        </DropdownTrigger>
        <DropdownContent>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.Vegetarian)}}>
            <div>
              <img className='img-icon' src={imgVegetable} alt='veg'/>
              <span>Vegetarian</span>
            </div>
            { selectedFilterTypes.includes(MenuFilterType.Vegetarian) && <img className='img-check' src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.UnderCal)}}>
            <div>
              <img className='img-icon' src={imgLowCalory} alt='cal'/>
              <span>Under 400 Cal</span>
            </div>
            { selectedFilterTypes.includes(MenuFilterType.UnderCal) && <img className='img-check' src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.GlutenFree)}}>
            <div>
              <img className='img-icon' src={imgGluten} alt='gluten'/>
              <span>Gluten Free</span>
            </div>
            { selectedFilterTypes.includes(MenuFilterType.GlutenFree) && <img className='img-check' src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.HighProtein)}}>
            <div>
              <img className='img-icon' src={imgHighProtein} alt='protein'/>
              <span>High Protein</span>
            </div>
            { selectedFilterTypes.includes(MenuFilterType.HighProtein) && <img className='img-check' src={imgCheck} alt='check'/> }
          </div>
          <div className='div-menu clickable' onClick={ () => {this.onToggleFilter(MenuFilterType.LowFat)}}>
            <div>
              <img className='img-icon' src={imgLowFat} alt='fat'/>
              <span>Low Fat</span>
            </div>
            { selectedFilterTypes.includes(MenuFilterType.LowFat) && <img className='img-check' src={imgCheck} alt='check'/> }
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
