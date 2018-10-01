import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import imgGreenStar from '../../../../assets/images/star_green.svg'

import { showMenuModal } from '../../../../redux/actions/menuModal'

class MenuItem extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showMenuModal({}))
  }

  render () {
    return (
      <div className='div-menu-item'>
        <img className='img-menu-item clickable' alt='Placeholder' onClick={ this.onShowMenuModal }/>
        <div className='div-menu-item-name-price'>
          <span>Chicken Leg Magic</span>
          <span>$40.00</span>
        </div>
        <div className='div-time-rating'>
          <div className='div-time'>
            40-55 min
          </div>
          <div className='div-rating'>
            <img src={imgGreenStar} alt='star'/>
            <span>4.5 (200)</span>
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

export default connect(mapStateToProps)(MenuItem)
