import React, { Component } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { connect } from 'react-redux'
import MenusHeader from './components/MenusHeader'
import MenuItem from './components/MenuItem'
import SideItem from './components/SideItem'
// import MealPlanItem from './components/MealPlanItem'
import './styles.css'

class Menus extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
      showAllMeals: !isMobileOnly,
      showAllSides: !isMobileOnly,
      filters: [],
    }
  }

  onChangeFilters = (filters) => {
    this.setState({
      filters: filters,
    })
  }

  onChangeSearchText = (searchText) => {
    this.setState({
      searchText: searchText,
    })
  }

  onSelectMealPlan = (mealPlanItem) => {
    this.props.history.push('/select-meals')
  }

  onViewAllMeals = () => {
    this.setState({
      showAllMeals: true,
    })
  }

  onViewAllSides = () => {
    this.setState({
      showAllSides: true,
    })
  }

  render () {
    let { showAllMeals, showAllSides, filters, searchText } = this.state
    let zipCode = this.props.user.user.zip

    let { products } = this.props.products
    let productsFilteredByName = products.filter(product => product.name.includes(searchText))
    let productsFilteredByCollectionTags = productsFilteredByName.filter(product => {
      if (filters.length === 0) {
        return true
      } else {
        return !(filters.some(filter => product.collections.indexOf(filter) === -1))
      }
    })
    let originalItems = productsFilteredByCollectionTags.filter(product => product.category === 'Mealpost Original')
    let sideItems = productsFilteredByCollectionTags.filter(product =>  product.category === 'Sides')

    return (
      <div className='div-menus-container'>
        {/* Menus Header */}
        <MenusHeader 
          zipCode={ zipCode }
          onChangeFilters={ this.onChangeFilters } 
          onChangeSearchText={ this.onChangeSearchText }
        />

        {/* Menus Table */}
        <div className='div-menus'>
          {/* Weekly Menus */}
          <div className='div-menus-section'>
          <div className='div-menus-section-title'><div className='div-line-left'/><span>MEALPOST ORIGINALS</span><div className='div-line-right'/></div>
            <div className='div-menus-grid row'>
              {
                originalItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-4 col-xl-4'>
                    {
                      <MenuItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                    }
                  </div>
                ).slice(0, !showAllMeals ? 4 : originalItems.length)
              }
            </div>
            { originalItems.length > 0 && !showAllMeals && <div className='div-view-all clickable' onClick={this.onViewAllMeals}>{`VIEW ALL ${originalItems.length} MEALS`}</div> }
          </div>

          {/* Sides */}
          <div className='div-menus-section'>
            <div className='div-menus-section-title'><div className='div-line-left'/><span>SIDES</span><div className='div-line-right'/></div>
            <div className='div-menus-grid row'>
              {
                sideItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-4 col-xl-4'>
                    {
                      <SideItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                    }
                  </div>
                ).slice(0, !showAllSides ? 4 : sideItems.length)
              }
            </div>
            { sideItems.length > 0 && !showAllSides && <div className='div-view-all clickable' onClick={this.onViewAllSides}>{`VIEW ALL ${sideItems.length} SIDES`}</div> }
          </div>

          {/* Meal Plans */}
          {/* <div className='div-menus-section'>
            <div className='div-menus-section-title'><div className='div-line-left'/><span>Meal Plans</span><div className='div-line-right'/></div>
            <div className='div-menus-grid row'>
              {
                Array(4).fill(0).map((item, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-4 col-xl-3'>
                    {
                      <MealPlanItem />
                    }
                  </div>
                )
              }
            </div>
          </div> */}
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    products: state.products,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Menus)
