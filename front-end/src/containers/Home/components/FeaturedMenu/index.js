import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import { showMenuModal } from '../../../../redux/actions/menuModal'

class FeaturedMenu extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showMenuModal({}))
  }

  render () {
    return (
      <div className='div-featured-menu'>
        <img className='img-featured-menu clickable' alt='Placeholder' onClick={ this.onShowMenuModal }/>
        <div className='div-featured-menu-details'>
          <div className='div-featured-menu-name'>
            English Breakfast Frittata x 5
          </div>
          <div className='div-featured-menu-more-detail'>
            <div className='div-featured-menu-detail-column-1'>
              <div className='div-featured-menu-detail-calories'>
                Calories: 280
              </div>
              <div className='div-featured-menu-detail-fat'>
                Fat: 21g
              </div>
            </div>
            <div className='div-featured-menu-detail-column-2'>
              <div className='div-featured-menu-detail-carbs'>
                Carbs: 13g
              </div>
              <div className='div-featured-menu-detail-protein'>
                Protein: 30g
              </div>
            </div>
          </div>
        </div>
        <div className='div-order'>
          <div className='div-price'>
            $55
          </div>
          <div className='div-quick-order clickable'>
            Quick Order
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
