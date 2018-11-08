import React from 'react'
import Image from 'material-ui-image'
import { ChasingDots } from 'better-react-spinkit'

const LazyImage = (props) => {
  return (
    <div className={ props.className } style={ props.style } onClick={ props.onClick }>
      <Image 
        style={{ paddingTop: 'unset', width: '100%', height: '100%', backgroundColor: 'transparent'}} 
        imageStyle={{objectFit: 'contain'}}
        src={ props.src } 
        loading={<ChasingDots size={48} color='#56B05A' />}
        disableSpinner={ props.disableSpinner }
      />
    </div>
  )
}

export default LazyImage
