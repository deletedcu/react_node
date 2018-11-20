import React, { Component } from 'react'
import { connect } from 'react-redux'
import LazyImage from '../../../../components/LazyImage'
import Rate from 'rc-rate'

import './styles.css'

import { showModal, ModalType } from '../../../../redux/actions/modal'

class MealPreferenceItem extends Component {

  onEdit = () => {
    this.props.dispatch(showModal(ModalType.mealPreferenceModal, this.props.item))
  }

  render () {
    const { item } = this.props

    return (
      <div className='meal-preference-item'>
        <LazyImage className='meal-preference-item-image' src={item.main_image}/>
        
        <div className='meal-preference-item-info'>
          <div className='meal-preference-item-name'>{item.name}</div>
          <Rate 
            defaultValue={item.rate} 
            disabled={true} 
            character={<div className='img-star'/>}
          />
          <div className='meal-preference-item-detail'>
            <div>Carbs: Potato</div>
            <div>*Special Request Added</div>
          </div>
          <div className='meal-preference-item-edit'><span className='clickable' onClick={this.onEdit}>Edit</span></div>
        </div>
      </div>
    )
  }
}

export default connect()(MealPreferenceItem)
