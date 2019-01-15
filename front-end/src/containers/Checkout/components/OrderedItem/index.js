import React from 'react'
import classNames from 'classnames'
import LazyImage from '../../../../components/LazyImage'

import './styles.css'

const OrderedItem = (props) => {
  return (
    <div className={ classNames('ordered-item', props.className) } style={ props.style }>
      <LazyImage className='img-item' src={ props.image }/>
      <div className='ordered-item-info'>
        <div>{ props.title }<span className='ordered-item-info-count'>{ props.count }</span></div>
      </div>
    </div>
  )
}

export default OrderedItem
