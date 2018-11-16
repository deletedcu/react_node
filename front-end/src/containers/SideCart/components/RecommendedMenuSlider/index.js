import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import LazyImage from '../../../../components/LazyImage'

import './styles.css'

import imgLeftArrow from '../../../../assets/images/green_left_arrow.svg'
import imgRightArrow from '../../../../assets/images/green_right_arrow.svg'

class RecommendedMenuSlider extends Component {

  onLeft = () => {
    this.refs.slider.slickPrev()
  }

  onRight = () => {
    this.refs.slider.slickNext()
  }

  render () {
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
    }
    const { products } = this.props.products

    let images = products.map((product, index) => {
      return <LazyImage key={index} className='img-recommended' src={ product.main_image } disableSpinner={true} />
    })

    return (
      <div className='recommended-menu-slider'>
        <img className='img-arrow clickable' src={imgLeftArrow} alt='left' onClick={this.onLeft}/>
        <Slider ref='slider' {...sliderSettings}>
          {images}
        </Slider>
        <img className='img-arrow clickable' src={imgRightArrow} alt='right' onClick={this.onRight}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps)(RecommendedMenuSlider)
