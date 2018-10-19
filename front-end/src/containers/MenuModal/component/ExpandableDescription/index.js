import React from 'react'
import classNames from 'classnames'
import ShowMore from 'react-show-more';
import './styles.css'

const ExpandableDescription = (props) => {
  return (
    <div className={classNames('div-description-text', props.className)} style={props.style}>
      <ShowMore
        lines={5}
        more='Read More'
        less=''
      >
      { props.children }
      </ShowMore>
    </div>
  )
}

export default ExpandableDescription
