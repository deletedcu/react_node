import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { showMenuModal } from '../../../../redux/actions/menuModal'
import { addToCart } from '../../../../redux/actions/cart'
import { showNotification } from '../../../../services/notification'

class FeaturedMenu extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showMenuModal(this.props.item))
  }

  onQuickOrder = () => {
    this.props.dispatch(addToCart(this.props.item))

    showNotification('Added to cart', 'success')
  }

  render () {
    return (
      <div className='div-featured-menu'>
        <img className='img-featured-menu clickable' alt='Placeholder' onClick={ this.onShowMenuModal }/>
        <div className='div-featured-menu-details-order'>  
          <div className='div-featured-menu-details'>
            <div className='div-featured-menu-name'>
              { this.props.item.name }
            </div>
            <div className='div-featured-menu-more-detail'>
              <div className='div-featured-menu-detail-column-1'>
                <div className='div-featured-menu-detail-calories'>
                  { `Calories: ${this.props.item.calories}` }
                </div>
                <div className='div-featured-menu-detail-fat'>
                  { `Fat: ${this.props.item.fat}g` }
                </div>
              </div>
              <div className='div-featured-menu-detail-column-2'>
                <div className='div-featured-menu-detail-carbs'>
                  { `Carbs: ${this.props.item.carbs}g` }
                </div>
                <div className='div-featured-menu-detail-protein'>
                  { `Protein: ${this.props.item.protein}g` }
                </div>
              </div>
            </div>
          </div>
          <div className='div-order'>
            <div className='div-price'>
              { `$${this.props.item.price}` }
            </div>
            <div className='div-quick-order clickable' onClick={ this.onQuickOrder }>
              Quick Order
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(FeaturedMenu)
