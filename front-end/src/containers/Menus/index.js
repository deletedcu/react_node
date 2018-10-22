import React, { Component } from 'react'
import { connect } from 'react-redux'
import MenusHeader from './components/MenusHeader'
import MenuItem from './components/MenuItem'

import './styles.css'

class Menus extends Component {

  render () {
    // default 12 items
    var menuItems = []
    Array.apply(null, Array(12)).forEach((value, index) => {
      menuItems.push({
        id: index,
        name: `English Breakfast Frittata (${index})`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.',
        price: (55 + index * 5),
        calories: (280 + index * 5),
        carbs: (13 + index),
        fat: (21 + index),
        protein: (30 + index),
      })
    })

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
            <MenusHeader history={ this.props.history }/>

            {/* Separator Line */}
            <div className='div-menus-separator'/>

            {/* Grid */}
            <div className='row'>
              {
                menuItems.map((menuItem, index) => 
                  <div key={index} className='div-menu-wrapper col-12 col-md-6 col-lg-6 col-xl-4'>
                    <MenuItem item={menuItem} count={ this.props.cart.items.filter((item) => { return item.id === menuItem.id }).length }/>
                  </div>
                )
              }
            </div>

            {/* Load More button */}
            <div className='div-load-more clickable'>
              Load More
            </div>
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
