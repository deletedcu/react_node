import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

import imgPlaceholder from '../../../../assets/images/thumbnail_placeholder.png'

class MenuThumbnailList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  render () {
    const images = this.props.imageUrls.map((imageUrl, index) => {
      return <img key={ index } src={ imgPlaceholder } alt='thumbnail' className={ 'clickable img-menu-thumbnail ' + ((this.state.selectedIndex === index) ? 'green-border' : 'gray-border') } onClick={ () => { this.setState({selectedIndex: index}) } }/>
    })

    return (
      <div className={ classNames('div-thumbnails-list', this.props.className) }>
        { images }
      </div>
    )
  }
}

export default MenuThumbnailList
