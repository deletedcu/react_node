import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Button from '../../../../components/Button'
import LazyImage from '../../../../components/LazyImage'
import Rate from 'rc-rate'

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class OrderHistoryItem extends Component {

  onRate = () => {
    this.props.dispatch(showModal(ModalType.orderFeedbackModal, this.props.item))
  }

  render () {
    const { underline, header, item } = this.props

    return (
      <div className={ classNames('order-history-item', { 'order-history-item-underlined' : underline }) }>
        <div className='order-history-item-name-column'>
          { header && <div className='order-history-item-column-title'>Item Name</div> }
          <div className='order-history-item-detail'>
            <LazyImage className='img-item' src={item.main_image} />
            <div>
              <div className='order-history-item-title'>{item.name}</div>
              <div className='order-history-item-more'>Nutrition Fact    Customized Meal</div>
            </div>
          </div>
        </div>

        <div className='order-history-item-quantity-column'>
          { header && <div className='order-history-item-column-title'>Quantity</div> }
          <div className='order-history-item-quantity'>{item.quantity}</div>
        </div>

        <div className='order-history-item-status-column'>
          { header && <div className='order-history-item-column-title'>Status</div> }
          <div className='order-history-item-status'>{item.status}</div>
        </div>

        <div className='order-history-item-price-column'>
          { header && <div className='order-history-item-column-title'>Price</div> }
          <div className='order-history-item-price'>{`$${item.price}`}</div>

          { item.rate ? 
            <Rate 
              defaultValue={item.rate} 
              disabled={true} 
              character={<div className='img-star'/>}
            />
            :
            <Button className='btn-rate' onClick={this.onRate}>Rate</Button>
          }
        </div>
      </div>
    )
  }
}

export default connect()(OrderHistoryItem)
