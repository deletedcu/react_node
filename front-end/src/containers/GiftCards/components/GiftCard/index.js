import React, { Component } from 'react'
import Slider from 'rc-slider';
import Button from '../../../../components/Button'
import classNames from 'classnames'

import './styles.css'
import imgCardBackground from '../../../../assets/images/card_bg.svg'

class GiftCard extends Component {

  constructor (props) {
    super(props)

    this.state = {
      price: props.price,
      sliderPrice: props.price,
      showSlider: false,
    }
  }

  componentWillReceiveProps ({ price }) {
    this.setState({
      price: price,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onChangePrice = (price) => {
    this.setState({
      price: price,
    })
  }

  onSelectPrice = (e) => {
    e.stopPropagation()

    this.setState({
      price: this.state.sliderPrice,
      showSlider: false,
    }, () => {
      this.props.onClick(this.state.price)
    })
  }

  onClick = () => {
    if (this.props.editable) {
      this.setState({
        showSlider: true,
      })
    } else {
      this.props.onClick()
    }
  }

  render () {
    const { showSlider, price, sliderPrice } = this.state
    const { selected } = this.props

    return (
      <div className={classNames('gift-card', {'gift-card-selected': selected}, 'clickable', this.props.className)} style={this.props.style} onClick={this.onClick}>
        <img className='gift-card-background' src={imgCardBackground} alt='card'/>
        <div className='gift-card-info'>
          <div className='gift-card-price'><span>{`$${price}`}</span></div>
          <div className='gift-card-title'>Gift Card</div>
        </div>

        { showSlider &&
          <div className='gift-card-slider-wrapper'>
            <div className='gift-card-slider'>
              <span className='span-price'>{`$${sliderPrice}`}</span>
              <Slider value={sliderPrice} onChange={this.onChangePrice}/>
              <Button className='btn-select' onClick={this.onSelectPrice}>Select</Button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default GiftCard
