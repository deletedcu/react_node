import React, { Component } from 'react'
import classNames from 'classnames'
import LazyImage from '../../../../../components/LazyImage'

import './styles.css'

class MenuThumbnailList extends Component {

  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0,
    }
  }

  onSelect = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
    }, () => {
      this.props.onThumbnailSelected(selectedIndex)
    })
  }

  render () {
    const images = this.props.imageUrls.map((imageUrl, index) => {
      return <LazyImage key={ index } src={ imageUrl } className={ 'clickable img-menu-thumbnail ' + ((this.state.selectedIndex === index) ? 'green-border' : 'gray-border') } onClick={ () => { this.onSelect(index) } } disableSpinner={true}/>
    })

    return (
      <div className={ classNames('div-thumbnails-list', this.props.className) }>
        { images }
      </div>
    )
  }
}

export default MenuThumbnailList
