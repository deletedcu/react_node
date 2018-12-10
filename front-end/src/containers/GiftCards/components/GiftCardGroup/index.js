import React, { Component } from 'react'
import GiftCard from '../GiftCard'

import './styles.css'

class GiftCardGroup extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 1,
      selectedPrice: 60,
    }
  }

  onSelect = (selectedIndex, price) => {
    this.setState({
      selectedIndex: selectedIndex,
      selectedPrice: price,
    })
  }

  render () {
    const { selectedIndex } = this.state

    return (
      <div className='gift-card-group'>
        <GiftCard editable={true} price={0} selected={selectedIndex === 0} onClick={(price)=>{this.onSelect(0, price)}}/>
        <GiftCard price={60} selected={selectedIndex === 1} onClick={(price)=>{this.onSelect(1, price)}}/>
        <GiftCard price={100} selected={selectedIndex === 2} onClick={(price)=>{this.onSelect(2, price)}}/>
      </div>
    )
  }
}

export default GiftCardGroup
