import React from 'react'
import classNames from 'classnames'

import './styles.css'

const OrderedItem = (props) => {
  return (
    <div className={ classNames('ordered-item', props.className) } style={ props.style }>
      <img src={ props.image } alt='item'/>
      <div className='ordered-item-info'>
        <div>{ props.title }</div>
        <div className='ordered-item-info-count'>{ props.count }</div>
      </div>
    </div>
  )
}

export default OrderedItem
