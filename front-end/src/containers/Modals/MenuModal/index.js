import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import ReactHtmlParser from 'react-html-parser'
import LazyImage from '../../../components/LazyImage'
import MenuThumbnailList from './component/MenuThumbnailList'
import IncrementCounter from './component/IncrementCounter'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import ExpandableDescription from './component/ExpandableDescription'
// import HorizontalSelectionGrid from '../../../components/HorizontalSelectionGrid'

import './styles.css'

import imgHighProtein from '../../../assets/images/high-protein.svg'
import imgGlutenFree from '../../../assets/images/gluten-free.svg'
import imgLowFat from '../../../assets/images/low-fat.png'
import imgUnder400Cal from '../../../assets/images/under-400-cal.png'
import imgVegetarian from '../../../assets/images/vegetarian.png'

import { closeModal } from '../../../redux/actions/modal'
import { addToCart } from '../../../redux/actions/cart'
// import { showNotification } from '../../../services/notification'

class MenuModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      item: props.modal.data,

      descriptionScrolled: false,
      itemCount: 1,
      
      specialInstructions: '',

      currentImageIndex: 0,
    }
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onScrollDescription = (e) => {
    let scrollOffset = e.target.scrollTop;

    if (scrollOffset > 0 && this.state.descriptionScrolled === false) {
      this.setState({
        descriptionScrolled: true,
      })
    } else if (scrollOffset === 0 && this.state.descriptionScrolled === true) {
      this.setState({
        descriptionScrolled: false,
      })
    }
  }

  onChange = (e) => {
    var name = e.target.name
    this.setState({
      [name]: e.target.value,
    })
  }

  onItemCountChange = (count) => {
    this.setState({
      itemCount: count,
    })
  }

  onSelectionChange = (selectedValue) => {
    const selectedIndex = this.state.item.recipiesPerWeek.indexOf(selectedValue)
    const price = this.state.item.prices[selectedIndex]

    this.setState({
      item: {...this.state.item, price: price }
    })
  }

  onAddToCart = () => {
    var items = new Array(this.state.itemCount).fill(this.state.item)
    
    this.props.dispatch(addToCart(items, this.props.pathName.includes('/menus')))
    this.props.dispatch(closeModal())

    // showNotification('Added to cart', 'success')
  }

  onThumbnailSelected = (selectedIndex) => {
    this.setState({
      currentImageIndex: selectedIndex,
    })
  }

  render () {
    const { item, currentImageIndex } = this.state
    const thumbnailUrls = [item.main_image].concat(item.files)

    return (
      <ModalContainer darkMode={true}>
        <div className='div-menu-modal-center' onClick={(e)=>e.stopPropagation()}>
          {/* Close button */}
          {/* <img src={ imgClose } alt='close' className='img-close clickable' onClick={ this.onClose }/> */}

          <div className='div-menu-modal-thumbnail-image-detail'>
            {/* Thumbnails */}
            <MenuThumbnailList 
              className='div-menu-modal-thumbnails'
              imageUrls={ thumbnailUrls }
              onThumbnailSelected={ this.onThumbnailSelected }
            />

            {/* Image / Short Info */}
            <div className='div-menu-modal-image-detail'>
              <LazyImage src={ thumbnailUrls[currentImageIndex] } className='img-menu'/>
              <span className='span-offer'>OFFER</span>
              
              <div className='div-menu-info-list'>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>{item.calories}</span>
                  <span className='span-menu-info-title'>CALORIES</span>
                </div>
                <div className='div-menu-info-separator'/>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>{item.carbs}</span>
                  <span className='span-menu-info-title'>CARBS</span>
                </div>
                <div className='div-menu-info-separator'/>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>{item.protein}</span>
                  <span className='span-menu-info-title'>PROTEIN</span>
                </div>
                <div className='div-menu-info-separator'/>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>{item.fat}</span>
                  <span className='span-menu-info-title'>FAT</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description / Add to cart */}
          <div className='div-menu-modal-description-cart'>
            <div className='div-menu-modal-description' onScroll={ this.onScrollDescription }>
              {/* Menu name */}
              <div className='div-menu-title'>
                { item.name }
              </div>

              {/* Specialities */}
              { item.collections.length > 0 &&
              <div className='div-menu-specialities'>
                { 
                  item.collections.map((collection, index) => {
                    let tagImage = null
                    switch(collection) {
                      case 'Gluten-Free': 
                        tagImage = imgGlutenFree
                        break
                      case 'High Protein':
                        tagImage = imgHighProtein
                        break
                      case 'Low Fat':
                        tagImage = imgLowFat
                        break
                      case 'Under 400cal':
                        tagImage = imgUnder400Cal
                        break
                      default:
                        tagImage = imgVegetarian
                    }

                    return (
                      <div key={index} className='div-menu-speciality'>
                        <img src={ tagImage } alt='special'/>
                        <span>{ collection }</span>
                      </div>
                    )
                  }) 
                }
              </div>
              }

              {/* Description */}
              <ExpandableDescription>
                { item.description }
              </ExpandableDescription>

              {/* Ingredients */}
              <div className='div-ingredients-list'>
                <div className='div-ingredients-list-title'> 
                  INGREDIENTS
                </div>
                <div className='div-ingredients'>
                  { ReactHtmlParser(item.ingredients) }
                </div>
              </div>

              {/* Recipies per week */}
              {/* { item.type !== 'menu' &&
                <div className='div-recipies-per-week'>
                  <div className='div-recipies-per-week-title'>
                    Recipies Per Week
                  </div>
                  <div className='div-recipies-selection-grid'>
                    <HorizontalSelectionGrid
                      values={ item.recipiesPerWeek }
                      onSelectionChange={ this.onSelectionChange }
                    />
                  </div>
                </div>
              } */}

              {/* Special instruction */}
              <div className='div-special-instructions'>
                <div className='div-special-instructions-title'>
                  ORDER NOTES
                </div>
                <textarea name='specialInstructions' className='input-special-instructions' value={this.state.specialInstructions} onChange={ this.onChange } placeholder="e.g. 'Make sure the steak is well done!'"/>
              </div>

              {!this.state.descriptionScrolled && <div className='div-opacity-layer-bottom'/>}
            </div>
            
            {/* Add to cart */}
            <div className='div-menu-modal-cart'>
              <IncrementCounter className='increment-counter' onChange={ this.onItemCountChange }/>
              <Button className={classNames('btn-add-to-cart', {'btn-add-to-cart-full': item.type !== 'menu'})} onClick={ this.onAddToCart }>ADD TO CART</Button>
            </div>

            { this.state.descriptionScrolled && <div className='div-opacity-layer-top'/> }
          </div>
        </div>
      </ModalContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(MenuModal)
