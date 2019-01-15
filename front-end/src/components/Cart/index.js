import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import './styles.css'

import imgCart from '../../assets/images/cart.svg'

import { showSidebar, hideSidebar } from '../../redux/actions/sideBar'

class Cart extends Component {

  constructor (props) {
    super(props)

    this.state = {
      purchasedCount: props.cart.items.length,
    }
  }

  componentWillReceiveProps({ cart }) {
    this.setState({
      purchasedCount: cart.items.length,
    })
  }

  onClickCart = () => {
    if (this.props.highlighted) {
      this.props.dispatch(hideSidebar())
    } else {
      this.props.dispatch(showSidebar())
    }
  }

  render () {
    return (
      <div className={classNames('div-cart', 'clickable', {'div-cart-highlighted': this.props.highlighted})} onClick={ this.onClickCart }>
        <img className='img-cart' src={imgCart} alt='cart'/>
        { !this.props.highlighted &&
          <span>{ this.state.purchasedCount }</span>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)
