import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Rate from 'rc-rate'
import Button from '../../../components/Button'

import './styles.css'
import imgClose from '../../../assets/images/close_button.svg'

import { closeModal } from '../../../redux/actions/modal'

class MealPreferenceModal extends Component {

  onSave = () => {

  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onChangeMealRate = (rate) => {

  }

  render () {
    return (
      <ModalContainer>
        <div className='meal-preference-modal'>
          <div className='meal-preference-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='meal-preference-title'>Edit Meal Preference</div>

          <div className='meal-preference-rate-title'>Rate the Meal</div>
          <Rate
            character={<div className='img-star'/>}
            onChange={this.onChangeMealRate}
          />

          <div className='meal-preference-save'>
            <Button className='btn-save' onClick={this.onSave}>Save</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(MealPreferenceModal)
