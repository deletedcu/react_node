import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import MenusHeader from './components/MenusHeader'
import MenuItem from './components/MenuItem'
import SideItem from './components/SideItem'
import MealPlanItem from './components/MealPlanItem'
import './styles.css'

class Menus extends Component {

  constructor (props) {
    super(props)

    this.state = {
      searchText: '',
    }
  }

  onChangeFilters = (filters) => {

  }

  onChangeSearchText = (searchText) => {
    this.setState({
      searchText: searchText,
    })
  }

  onSelectMealPlan = (mealPlanItem) => {
    this.props.history.push('/select-meals')
  }

  render () {
    let { products } = this.props.products
    let menuItems = products.filter(product => product.name.includes(this.state.searchText)).map(product => {return {...product, type: 'menu'}})

    return (
      <div className='div-menus-container'>
        {/* Menus Header */}
        <MenusHeader onChangeFilters={ this.onChangeFilters } onChangeSearchText={ this.onChangeSearchText }/>

        {/* Menus Table */}
        <div className='div-menus'>
          {/* Weekly Menus */}
          <div className='div-menus-section'>
            <div className='div-menus-section-title'>{`Week of ${moment().format('MMMM Do')}`}</div>
            <div className='div-menus-grid row'>
              {
                menuItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-4 col-xl-3'>
                    {
                      <MenuItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                    }
                  </div>
                )
              }
            </div>
          </div>

          {/* Sides */}
          <div className='div-menus-section'>
            <div className='div-menus-section-title'><span>Side</span><div className='div-line'/></div>
            <div className='div-menus-grid row'>
              {
                menuItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-4 col-xl-3'>
                    {
                      <SideItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                    }
                  </div>
                )
              }
            </div>
          </div>

          {/* Meal Plans */}
          <div className='div-menus-section'>
            <div className='div-menus-section-title'><span>Meal Plans</span><div className='div-line'/></div>
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
          </div>
          
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Menus)
