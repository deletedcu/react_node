import React, { Component } from 'react'
import GiftCard from '../GiftCard'

import './styles.css'

class GiftCardGroup extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  onSelect = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
    })
  }

  render () {
    const { selectedIndex } = this.state

    return (
      <div className='gift-card-group'>
        <GiftCard price={50} selected={selectedIndex === 0} onClick={()=>{this.onSelect(0)}}/>
        <GiftCard price={200} selected={selectedIndex === 1} onClick={()=>{this.onSelect(1)}}/>
        <GiftCard price={500} selected={selectedIndex === 2} onClick={()=>{this.onSelect(2)}}/>
      </div>
    )
  }
}

export default GiftCardGroup
