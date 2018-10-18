import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowMore from 'react-show-more';
import MenuThumbnailList from './component/MenuThumbnailList'
import IncrementCounter from './component/IncrementCounter'
import Button from '../../components/Button'
import Checkbox, { CheckboxType } from '../../components/Checkbox'
import ModalContainer from '../../components/ModalContainer'

import './styles.css'

import imgClose from '../../assets/images/close.svg'
import imgHighProtein from '../../assets/images/high-protein.svg'
import imgGlutenFree from '../../assets/images/gluten-free.svg'
import imgSoyFree from '../../assets/images/soy-free.svg'

import { closeMenuModal } from '../../redux/actions/menuModal'

class MenuModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      descriptionScrolled: false,
      
      specialInstructions: '',
    }
  }

  onClose = () => {
    this.props.dispatch(closeMenuModal())
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

  }

  onAddToCart = () => {

  }

  render () {
    return (
      <ModalContainer>
        <div className='div-menu-modal-center'>
          {/* Close button */}
          <img src={ imgClose } alt='close' className='img-close clickable' onClick={ this.onClose }/>

          <div className='div-menu-modal-thumbnail-image-detail'>
            {/* Thumbnails */}
            <MenuThumbnailList 
              className='div-menu-modal-thumbnails'
              imageUrls={['', '']}
            />

            {/* Image / Short Info */}
            <div className='div-menu-modal-image-detail'>
              <img src='' alt='placeholder' className='img-menu'/>
              <span className='span-offer'>OFFER</span>
              <div className='div-menu-info-list'>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>29 G</span><br/>
                  <span className='span-menu-info-title'>PROTEIN</span>
                </div>
                <div className='div-menu-info-separator'/>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>480</span><br/>
                  <span className='span-menu-info-title'>CALORIES</span>
                </div>
                <div className='div-menu-info-separator'/>
                <div className='div-menu-info'>
                  <span className='span-menu-info-value'>49 G</span><br/>
                  <span className='span-menu-info-title'>CARGS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description / Add to cart */}
          <div className='div-menu-modal-description-cart'>
            <div className='div-menu-modal-description' onScroll={ this.onScrollDescription }>
              {/* Menu name */}
              <div className='div-menu-title'>
                Chicken Leg Magic
              </div>

              {/* Specialities */}
              <div className='div-menu-specialities'>
                <div className='div-menu-speciality'>
                  <img src={ imgHighProtein } alt='special'/>
                  <span>High Protein</span>
                </div>
                <div className='div-menu-speciality'>
                  <img src={ imgGlutenFree } alt='special'/>
                  <span>Gluten Free</span>
                </div>
                <div className='div-menu-speciality'>
                  <img src={ imgSoyFree } alt='special'/>
                  <span>Soy Free</span>
                </div>
              </div>

              {/* Description */}
              <div className='div-description-text'>
                <ShowMore
                  lines={5}
                  more='Read More'
                  less=''
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut nisi eget diam bibendum tempor eget in ex. Mauris libero mi, viverra ut magna eu, sollicitudin efficitur quam. Phasellus in dui gravida, luctus orci sed, pellentesque est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse ac libero quis augue congue viverra a a enim. Ut vel posuere dui. Phasellus rutrum leo mi, nec eleifend neque laoreet at.
                </ShowMore>
              </div>

              {/* Additional */}
              <div className='div-ingredients-list'>
                <div className='div-ingredients-list-title'> 
                  Ingredients
                </div>
                <Checkbox type={CheckboxType.round} onCheckChange={ () => {} }>a) Fries</Checkbox>
                <Checkbox type={CheckboxType.round} onCheckChange={ () => {} }>b) Sour Cream & Chive Potato</Checkbox>
                <Checkbox type={CheckboxType.round} onCheckChange={ () => {} }>c) Potato</Checkbox>
                <Checkbox type={CheckboxType.round} onCheckChange={ () => {} }>d) Sour Cream & Chive Potato</Checkbox>
                <Checkbox type={CheckboxType.round} onCheckChange={ () => {} }>e) Fries </Checkbox>
              </div>

              {/* Special instruction */}
              {/* <div className='div-special-instructions'>
                <div className='div-special-instructions-title'>
                  Special Instructions
                </div>
                <input type='text' name='specialInstructions' className='input-special-instructions' placeholder='I am alergic to banana' value={this.state.specialInstructions} onChange={ this.onChange }/>
              </div> */}

              { !this.state.descriptionScrolled && <div className='div-opacity-layer-bottom'/> }
            </div>
            
            {/* Add to cart */}
            <div className='div-menu-modal-cart'>
              <IncrementCounter className='increment-counter' onChange={ this.onItemCountChange }/>
              <Button className='btn-add-to-cart' onClick={ this.onAddToCart }>ADD TO CART</Button>
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
    menuModal: state.menuModal,
  }
}

export default connect(mapStateToProps)(MenuModal)
