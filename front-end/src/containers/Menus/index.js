import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenusHeader, { MenuTypes } from './components/MenusHeader'
import MenuItem from './components/MenuItem'

import './styles.css'

class Menus extends Component {

  constructor (props) {
    super(props)

    this.state = {
      menuType: MenuTypes.menu,
      searchText: '',
    }
  }

  onChangeMenu = (menuType) => {
    this.setState({
      menuType: menuType,
    })
  }

  onChangeSearchText = (searchText) => {
    this.setState({
      searchText: searchText,
    })
  }

  render () {
    // default 12 items
    var menuItems = []

    switch (this.state.menuType) {
      case MenuTypes.menu:
        Array.apply(null, Array(12)).forEach((value, index) => {
          let item = {
            id: index,
            name: `English Breakfast (${index})`,
            type: 'menu',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.',
            price: (55 + index * 5),
            calories: (280 + index * 5),
            carbs: (13 + index),
            fat: (21 + index),
            protein: (30 + index),
          }

          item.name.includes(this.state.searchText) && menuItems.push(item)
        })
        break
        
      case MenuTypes.recommended:
        Array.apply(null, Array(6)).forEach((value, index) => {
          let item = {
            id: index,
            name: `English Breakfast (${index})`,
            type: 'menu',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.',
            price: (55 + index * 5),
            calories: (280 + index * 5),
            carbs: (13 + index),
            fat: (21 + index),
            protein: (30 + index),
          }

          item.name.includes(this.state.searchText) && menuItems.push(item)
        })
        break

      case MenuTypes.mealplans:
        Array.apply(null, Array(3)).forEach((value, index) => {
          let item = {
            id: 'mealplan' + index,
            type: 'mealplan',
            name: `Weight Control`,
            description: 'Our Weight Loss plan is geared towards those who want to lose weight through precise dieting. Meals on this plan focuses on prioritizing adequately fueling your body while keeping you under your caloric limit.',
            price: 40,
            prices: [40, 60, 80],
            recipiesPerWeek: [4, 6, 9],
            menu: [
              {
                name: 'Chickpea Power Bowl',
                calories: 430,
                fat: 6.6,
                carbs: 40,
                protein: 49,
              },
              {
                name: 'Eggplant Lasagna',
                calories: 430,
                fat: 6.6,
                carbs: 40,
                protein: 49,
              },
              {
                name: 'Zucchini Noodle with Meatball',
                calories: 430,
                fat: 6.6,
                carbs: 40,
                protein: 49,
              },
              {
                name: 'Vegan coconut Curry',
                calories: 430,
                fat: 6.6,
                carbs: 40,
                protein: 49,
              },
            ]
          }

          item.name.includes(this.state.searchText) && menuItems.push(item)
        })
        break
      default:
        break
    }

    return (
      <div className='div-menus-container'>
        {/* Banner and Title */}
        <div className='div-menus-banner'>
          <div className='div-menus-title'>
            MENUS
          </div>
        </div>

        {/* Menus Table */}
        <div className='div-menus'>
          {/* bootstrap - container */}
          <div className='div-menus-grid container'>
            {/* Menus Header */}
            <MenusHeader onChangeMenu={ this.onChangeMenu } onChangeSearchText={ this.onChangeSearchText }/>

            {/* Separator Line */}
            <div className='div-menus-separator'/>

            {/* Grid */}
            <div className='row'>
              {
                menuItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-6 col-xl-4'>
                    { this.state.menuType === MenuTypes.mealplans ?
                      <MenuItem item={menuItem} />
                      :
                      <MenuItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                    }
                  </div>
                )
              }
            </div>

            {/* Load More button */}
            {/* { this.state.menuType === MenuTypes.menu &&
              <div className='div-load-more clickable'>
                Load More
              </div>
            } */}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Menus)
