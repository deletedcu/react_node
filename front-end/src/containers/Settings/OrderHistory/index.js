import React, { Component } from 'react'
import OrderHistoryItem from '../components/OrderHistoryItem'
import './styles.css'

class OrderHistory extends Component {

  render () {
    return (
      <div className='div-order-history-container'>
        <OrderHistoryItem
          header={true}
          underline={true}
          item={{
            main_image: 'not available',
            name: 'The Breakfast Platter x3',
            quantity: 1,
            status: 'Delivered: 10/30/2018',
            price: 29.95,
          }}
        />
        <OrderHistoryItem
          header={false}
          underline={false}
          item={{
            main_image: 'not available',
            name: 'The Breakfast Platter x3',
            quantity: 1,
            status: 'Delivered: 10/30/2018',
            price: 29.95,
            rate: 3,
          }}
        />
      </div>
    )
  }
}

export default OrderHistory
