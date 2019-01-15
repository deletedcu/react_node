import React from 'react'
import FacebookLogin from 'react-facebook-login'

import './styles.css'

import imgFacebook from '../../../../assets/images/google.svg'

const FacebookButton = (props) => {
  return (
    <FacebookLogin
      appId='334857687091368'
      autoLoad
      callback={ props.callback }
      cssClass='facebook-button'
      icon={<img src={imgFacebook} alt='fb'/>}
      textButton='CONTINUE WITH GOOGLE'
    />
  )
}

export default FacebookButton
