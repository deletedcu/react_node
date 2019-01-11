import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import ShowMore from 'react-show-more';

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'
import { addToCart } from '../../../../redux/actions/cart'

class SideItem extends Component {

  onShowMenuModal = () => {
    this.props.dispatch(showModal(ModalType.menuModal, this.props.item))
  }

  onAddToCart = () => {
    this.props.dispatch(addToCart([this.props.item]))
    
    // showNotification('Added to cart', 'success')
  }

  render () {
    let { item } = this.props

    return (
      <div className='div-side-item' onClick={(e)=>e.stopPropagation()}>
        <div className='div-side-item-info'>
          <div className='div-side-item-detail'>
            <div className='div-side-item-title'>
              <ShowMore
                lines={1}
                more=''
                less=''
              >
              { item.name }
              </ShowMore>
            </div>
            <div className='div-side-item-description'>
              <ShowMore
                lines={3}
                more=''
                less=''
              >
              { item.description }
              </ShowMore>
            </div>
          </div>

          <LazyImage className='img-side-item clickable' src={ item.main_image } onClick={ this.onShowMenuModal }/>
        </div>

        <div className='div-side-item-bottom'>
          <div className='div-side-item-price'>
            { item.display_price }
          </div>

          <div className='div-side-item-add clickable' onClick={ this.onAddToCart }>
            Add
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(SideItem)
