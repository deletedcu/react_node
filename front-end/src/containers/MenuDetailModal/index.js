import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../components/ModalContainer'
import LazyImage from '../../components/LazyImage'
import Button from '../../components/Button'
import RadioButton from '../../components/RadioButton'
import IncrementCounter from './components/IncrementCounter'

import './styles.css'

import imgClose from '../../assets/images/close_button.svg'
import imgLike from '../../assets/images/like.svg'

import { addToCart } from '../../redux/actions/cart'
import { closeMenuModal } from '../../redux/actions/menuModal'
import { showNotification } from '../../services/notification'

class MenuDetailModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      item: props.menuModal.item,
      itemCount: 1,
      selection: 0,
      specialRequest: '',
    }
  }

  onClose = () => {
    this.props.dispatch(closeMenuModal())
  }

  onItemCountChange = (count) => {
    this.setState({
      itemCount: count,
    })
  }

  onSelectionChange = (selection) => {
    this.setState({
      selection: selection,
    })
  }

  onAddToCart = () => {
    var items = new Array(this.state.itemCount).fill(this.state.item)
    
    this.props.dispatch(addToCart(items))
    this.props.dispatch(closeMenuModal())

    showNotification('Added to cart', 'success')
  }

  render () {
    const { item, selection } = this.state

    return (
      <ModalContainer>
        <div className='div-menu-modal-center'>
          {/* Menu detail */}
          <div className='div-menu-modal-detail'>
            {/* Menu name, description, ingredients, etc */}
            <div className='div-menu-modal-detail-text'>
              <div className='div-menu-title'>{ item.name }</div>
              <div className='div-menu-description'>{ item.description }</div>
              <div className='div-menu-nutrients'>
              
              </div>
              <div className='div-menu-ingredients'>
              </div>
            </div>

            {/* Menu image */}
            <div className='div-menu-modal-detail-image'>
              <div className='div-menu-modal-close'>
                <img className='clickable' src={imgClose} alt='close' onClick={this.onClose}/>
              </div>
              <LazyImage className='img-menu' src={ item.main_image }/>
            </div>
          </div>

          {/* Separator line */}
          <div className='div-menu-modal-separator'/>

          {/* Customer inputs */}
          <div className='div-menu-modal-customer-input'>
            {/* Selection area */}
            <div className='div-menu-modal-selection'>
              <div>Selection (Required)</div>
              <div className='div-menu-modal-selection-title'>Carbs</div>
              <RadioButton checked={selection === 0} onCheckChange={ () => {this.onSelectionChange(0)} }>Rice</RadioButton>
              <RadioButton checked={selection === 1} onCheckChange={ () => {this.onSelectionChange(1)} }>Potato</RadioButton>
              <RadioButton checked={selection === 2} onCheckChange={ () => {this.onSelectionChange(2)} }>No Carbs</RadioButton>
            </div>

            {/* Special request input */}
            <div className='div-menu-modal-special-request'>
              <div>Special Request</div>
              <textarea/>
            </div>
          </div>

          {/* Bottom area - action buttons */}
          <div className='div-menu-modal-bottom'>
            <IncrementCounter
              onChange={ this.onItemCountChange }
            />

            <div className='div-menu-modal-buttons'>
              <Button className='btn-add' onClick={this.onAddToCart}>ADD TO CART</Button>
              <Button className='btn-like'><img src={imgLike} alt='like'/></Button>
            </div>
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

export default connect(mapStateToProps)(MenuDetailModal)
