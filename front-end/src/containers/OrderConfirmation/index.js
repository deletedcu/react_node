import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import qs from 'querystring'
import { connect } from 'react-redux'
import moment from 'moment'

import './styles.css'
import imgClock from '../../assets/images/order-date.svg'
import imgLocation from '../../assets/images/order-location.svg'
import imgItems from '../../assets/images/order-items.svg'
import imgShare from '../../assets/images/share.svg'
import imgCopy from '../../assets/images/copy.svg'
import { showNotification } from '../../services/notification';
import { fetchOrder } from '../../services/orderHistory';

class OrderConfirmation extends Component {

  constructor (props) {
    super(props)

    let queryParams = qs.parse(this.props.location.search.replace('?', ''))

    this.state = {
      orderId: queryParams.order_id || '',
      deliveryDate: '',
      name: '--',
      address1: '--',
      address2: '--',
      items: [],
    }
  }

  componentDidMount () {
    fetchOrder(this.props.user.user.token, this.state.orderId)
      .then(res => {
        const order = res.order

        this.setState({
          deliveryDate: moment(order.shipping_info.delivery_date).format('MMMM DD, YYYY'),
          name: order.user.name,
          address1: order.shipping_info.address,
          address2: `${order.shipping_info.state} ${order.shipping_info.zip}`,
          items: order.products,
        })
      })
      .catch(err => {
        showNotification('Failed to fetch order details', 'error');
      });
  }

  onCopyReferralLink = () => {
    this.refs.referralLink.select()
    document.execCommand('copy')

    showNotification('Referral link copied to clipboard', 'info')
  }

  onShare = () => {
    window.open('mailto:', 'this')
  }

  render () {
    const { deliveryDate, name, address1, address2, items } = this.state

    return (
      <div className='div-order-confirm-container'>
        <div className='div-order-confirm-form'>
          {/* Header */}
          <div className='div-order-confirm-form-header'>
            <span className='span-title'>YOUR ORDER HAS BEEN PLACED</span>
            <span className='span-subtitle'>A confirmation email is on its way</span>
          </div>

          <div className='separator'/>

          {/* Detail */}
          <div className='div-order-confirm-form-detail'>
            <div className='order-delivery-date'>{ deliveryDate }</div>
            <div className='order-info-list'>
              <div className='order-info'>
                <img src={imgClock} alt='clock'/>
                <span>Delivery between 2-3PM</span>
              </div>
              <div className='order-info'>
                <img src={imgLocation} alt='location'/>
                <div>
                  <span className='name'>{ name }</span>
                  <span>{ address1 }</span>
                  <span>{ address2 }</span>
                </div>
              </div>
              <div className='order-info'>
                <img src={imgItems} alt='items'/>
                <div>
                  {
                    items.map((item, index) => {
                      return <span key={index}>{`${item.product_name} x${item.quantity}`}</span>
                    })
                  }
                </div>
              </div>
            </div>
            <div className='order-history-link'><Link to='/settings/order_history'>View or manage your order</Link></div>
          </div>

          <div className='separator'/>

          {/* Refer & Share */}
          <div className='div-order-confirm-share'>
            <div className='order-share-title'>Refer Friends & Earn</div>
            <div className='order-share-description'>Ask your friends to sign up with your referral code and place an order. Once completed, both you and your friend each earn $20.</div>
            <div className='order-referral-link'>
              <div className='order-referral-link-title'>YOUR REFERRAL LINK</div>
              <div className='order-referral-link-box'>
                <input ref='referralLink' value='https://www.mealpost.io/referral/LANFEV' readOnly/>
                <img className='clickable' src={imgCopy} alt='copy' onClick={this.onCopyReferralLink}/>
              </div>
            </div>
            <Button className='btn-share' onClick={this.onShare}><img src={imgShare} alt='share'/><span>SHARE NOW</span></Button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(OrderConfirmation)
