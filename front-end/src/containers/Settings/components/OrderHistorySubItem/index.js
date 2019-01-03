import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import Button from '../../../../components/Button'

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class OrderHistorySubItem extends Component {

  onRate = () => {
    this.props.dispatch(showModal(ModalType.orderFeedbackModal, {
      product_id: this.props.product.id,
      order_id: this.props.orderId,
    }))
  }

  render () {
    const { product, quantity } = this.props

    return (
      <div className='order-history-subitem'>
        <div className='order-history-subitem-info'>
          <LazyImage className='img-subitem' src={product.main_image}/>
          <div className='order-history-subitem-detail'>
            <span className='span-subitem-name'>{ product.name }</span>
            {/* <span className='span-subitem-options'>Options: No Carbs, Gluten</span> */}
            <span className='span-subitem-quantity'>{ `Quantity: ${quantity}` }</span>
            <span className='span-subitem-rate clickable' onClick={this.onRate}>Rate</span>
          </div>
        </div>

        <Button className='btn-rate' onClick={this.onRate}>Rate</Button>
      </div>
    )
  }
}

export default connect()(OrderHistorySubItem)
