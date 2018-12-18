import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import OrderHistorySubItem from '../OrderHistorySubItem'

import './styles.css'
import imgPlaceholder from '../../../../assets/images/order_placeholder.png'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class OrderHistoryItem extends Component {

  constructor (props) {
    super(props)

    this.state = {
      showSubItems: false,
    }
  }

  onCancel = () => {
    this.props.dispatch(showModal(ModalType.orderCancelModal))
  }

  onToggleSubItems = () => {
    this.setState({
      showSubItems: !this.state.showSubItems,
    })
  }

  render () {
    const { showSubItems } = this.state

    return (
      <div className='order-history-item'>
        {/* Desktop mode */}
        <div className='order-history-main'>
          <div className='order-history-item-name'>
            <LazyImage className='img-item clickable' src={imgPlaceholder} onClick={this.onToggleSubItems}/>
            <div className='order-history-item-info clickable'>
              <span className='span-order-number-title' onClick={this.onToggleSubItems}>Order Number</span>
              <span className='span-order-number' onClick={this.onToggleSubItems}>R970777368</span>
              <span className='span-cancel' onClick={this.onCancel}>Cancel</span>
            </div>
          </div>

          <div className='order-history-item-status'>
            Order Placed
          </div>

          <div className='order-history-item-date'>
            Dec 17 2018
          </div>

          <div className='order-history-item-total'>
            $29.95
          </div>
        </div>

        {/* Responsive mode */}
        <div className='order-history-main-responsive'>
          <LazyImage className='img-item clickable' src={imgPlaceholder} onClick={this.onToggleSubItems}/>
          <div className='order-history-main-responsive-info'>
            <div>
              <span className='span-number-title'>Order Number</span>
              <span className='span-price'>$29.95</span>
            </div>
            <span className='span-number'>R970777368</span>
            <span className='span-cancel clickable' onClick={this.onCancel}>Cancel</span>
            <span className='span-date'>Order Placed : Dec 17 2018</span>
          </div>
        </div>

        { showSubItems && 
          <div className='order-history-sub'>
            <OrderHistorySubItem/>
            <OrderHistorySubItem/>
            <OrderHistorySubItem/>
          </div>
        }
      </div>
    )
  }
}

export default connect()(OrderHistoryItem)
