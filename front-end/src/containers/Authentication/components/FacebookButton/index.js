import React from 'react'
import classNames from 'classnames'

import './styles.css'

import imgFacebook from '../../../../assets/images/facebook_green.svg'

const FacebookButton = (props) => {
  return (
    <div className={classNames('facebook-button clickable', props.className)} style={props.style} onClick={props.onClick}>
      <img src={imgFacebook} alt='fb'/>
      CONTINUE WITH FACEBOOK
    </div>
  )
}

export default FacebookButton
