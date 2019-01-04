import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import LazyImage from '../../../../components/LazyImage'
import OrderHistorySubItem from '../OrderHistorySubItem'

import './styles.css'

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
    let { item } = this.props
    const products = this.props.products.products

    let mainImageSrc = '';

    if (products.length > 0 && item.products) {
      item.fullProducts = item.products.map(purchasedProductInfo => {
        const { product_id, quantity } = purchasedProductInfo
        const productInfo = products.find(product => product.id === product_id)
        return { product: productInfo, quantity: quantity }
      });

      mainImageSrc = item.fullProducts[0].product.main_image
    }

    return (
      <div className='order-history-item'>
        {/* Desktop mode */}
        <div className='order-history-main'>
          <div className='order-history-item-name'>
            <LazyImage className='img-item clickable' src={mainImageSrc} onClick={this.onToggleSubItems}/>
            <div className='order-history-item-info clickable'>
              <span className='span-order-number-title' onClick={this.onToggleSubItems}>Order Number</span>
              <span className='span-order-number' onClick={this.onToggleSubItems}>{item.id}</span>
            </div>
          </div>

          <div className='order-history-item-status'>
          { item.shipping === 'unfulfilled' ? 'Order Placed' : 'Fulfilled' }
          </div>

          <div className='order-history-item-date'>
            { moment(item.timestamp).format('MMM D YYYY') }
          </div>

          <div className='order-history-item-total'>
            { item.price }
          </div>
        </div>

        {/* Responsive mode */}
        <div className='order-history-main-responsive'>
          <LazyImage className='img-item clickable' src={mainImageSrc} onClick={this.onToggleSubItems}/>
          <div className='order-history-main-responsive-info'>
            <div>
              <span className='span-number-title'>Order Number</span>
              <span className='span-price'>{ item.price }</span>
            </div>
            <span className='span-number'>{ item.id } </span>
            <span className='span-date'>{ `Order Placed: ${moment(item.timestamp).format('MMM D YYYY')}` }</span>
          </div>
        </div>

        { showSubItems && 
          <div className='order-history-sub'>
            {
              item.fullProducts.map((product, index) => <OrderHistorySubItem key={index} orderId={item.id}  product={product.product}  quantity={product.quantity}/>)
            }
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(OrderHistoryItem)
