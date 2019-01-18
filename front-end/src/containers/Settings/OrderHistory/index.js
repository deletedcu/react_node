import React, { Component } from 'react'
import OrderHistoryItem from '../components/OrderHistoryItem'
import Button from '../../../components/Button'
import { connect } from 'react-redux'
import './styles.css'

import imgNoOrder from '../../../assets/images/no_order.png'

import { fetchOrderHistory } from '../../../services/orderHistory'
import { showNotification } from '../../../services/notification'
import { showOverlaySpinner, hideOverlaySpinner } from '../../../redux/actions/overlaySpinner'

class OrderHistory extends Component {

  constructor (props) {
    super(props)

    this.state = {
      orderHistory: [],
      showAll: false,
    }
  }

  componentDidMount () {
    this.props.dispatch(showOverlaySpinner())

    fetchOrderHistory(this.props.user.user.token)
      .then(res => {
        this.props.dispatch(hideOverlaySpinner())
        this.setState({
          orderHistory: res.order_history,
          showAll: res.order_history.length <= 5,
        })
      })
      .catch(err => {
        this.props.dispatch(hideOverlaySpinner())
        showNotification('Failed to retrieve order history', 'error')
      })
  }

  onLoadMore = () => {
    this.setState({
      showAll: true,
    })
  }

  render () {
    const { orderHistory, showAll } = this.state

    return (
      <div className='div-order-history-container'>
        <div className='div-order-history-header'>
          <span className='span-name'>Item Name</span>
          <span className='span-status'>Status</span>
          <span className='span-date'>Order Date</span>
          <span className='span-total'>Total</span>
        </div>

        <div className='div-order-history-items'>
        {
          orderHistory.length > 0 ?
          (
            orderHistory.slice(0, showAll ? orderHistory.length : 3).map((item, index) => {
              return <OrderHistoryItem key={index} item={item}/>
            })
          )
          :
          <div className='div-no-order'>
            <img src={imgNoOrder} alt='noOrder'/>
            <span>No orders have been placed.</span>
          </div>
        }
        </div>

        { 
          !showAll && orderHistory.length > 0 &&
          <Button className='btn-load-more' onClick={this.onLoadMore}>Load More</Button>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(OrderHistory)
