import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import Button from '../../../../components/Button'

import './styles.css'
import imgPlaceholder from '../../../../assets/images/order_placeholder.png'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class OrderHistorySubItem extends Component {

  onRate = () => {
    this.props.dispatch(showModal(ModalType.orderFeedbackModal))
  }

  render () {
    return (
      <div className='order-history-subitem'>
        <div className='order-history-subitem-info'>
          <LazyImage className='img-subitem' src={imgPlaceholder}/>
          <div className='order-history-subitem-detail'>
            <span className='span-subitem-name'>The Breakfast Platter</span>
            <span className='span-subitem-options'>Options: No Carbs, Gluten</span>
            <span className='span-subitem-quantity'>Quantity: 1</span>
            <span className='span-subitem-rate clickable' onClick={this.onRate}>Rate</span>
          </div>
        </div>

        <Button className='btn-rate' onClick={this.onRate}>Rate</Button>
      </div>
    )
  }
}

export default connect()(OrderHistorySubItem)
