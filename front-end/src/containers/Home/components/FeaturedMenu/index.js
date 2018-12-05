import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'
import { addToCart } from '../../../../redux/actions/cart'
// import { showNotification } from '../../../../services/notification'

class FeaturedMenu extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showModal(ModalType.menuModal, this.props.item))
  }

  onQuickOrder = () => {
    this.props.dispatch(addToCart(this.props.item, false))

    // showNotification('Added to cart', 'success')
  }

  render () {
    const { item } = this.props

    return (
      <div className='div-featured-menu'>
        <LazyImage className='img-featured-menu clickable' src={ item.main_image } onClick={ this.onShowMenuModal }/>
        
        <div className='div-featured-menu-details-order'>  
          <div className='div-featured-menu-details'>
            <div className='div-featured-menu-name'>
              { item.name }
            </div>
            <div className='div-featured-menu-more-detail'>
              <div className='div-featured-menu-detail-column-1'>
                <div className='div-featured-menu-detail-calories'>
                  { `Calories: ${item.calories}` }
                </div>
                <div className='div-featured-menu-detail-fat'>
                  { `Fat: ${item.fat}g` }
                </div>
              </div>
              <div className='div-featured-menu-detail-column-2'>
                <div className='div-featured-menu-detail-carbs'>
                  { `Carbs: ${item.carbs}g` }
                </div>
                <div className='div-featured-menu-detail-protein'>
                  { `Protein: ${item.protein}g` }
                </div>
              </div>
            </div>
          </div>
          <div className='div-order'>
            <div className='div-price'>
              { `${item.display_price}` }
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
