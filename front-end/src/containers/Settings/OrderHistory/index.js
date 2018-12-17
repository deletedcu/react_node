import React, { Component } from 'react'
import OrderHistoryItem from '../components/OrderHistoryItem'
import Button from '../../../components/Button'
import './styles.css'

class OrderHistory extends Component {

  onLoadMore = () => {

  }

  render () {
    return (
      <div className='div-order-history-container'>
        <div className='div-order-history-header'>
          <span className='span-name'>Item Name</span>
          <span className='span-status'>Status</span>
          <span className='span-date'>Order Date</span>
          <span className='span-total'>Total</span>
        </div>

        <div className='div-order-history-items'>
          <OrderHistoryItem/>
          <OrderHistoryItem/>
          <OrderHistoryItem/>
        </div>

        <Button className='btn-load-more' onClick={this.onLoadMore}>Load More</Button>
      </div>
    )
  }
}

export default OrderHistory
