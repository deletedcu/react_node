import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Rate from 'rc-rate'
import Button from '../../../components/Button'
import RadioButton from '../../../components/RadioButton'
import Checkbox, { CheckboxType } from '../../../components/Checkbox'

import './styles.css'
import imgClose from '../../../assets/images/close_button.svg'

import { closeModal } from '../../../redux/actions/modal'

class MealPreferenceModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      carbsSelectedIndex: 0,
      vegetablesSelectedIndex: -1,
      othersSelectedIndex: -1,
      hasSpecialRequest: false,
      specialRequest: '',
    }
  }

  onSave = () => {

  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onChangeMealRate = (rate) => {

  }

  onCarbsSelectionChange = (index) => {
    this.setState({
      carbsSelectedIndex: index,
    })
  }

  onVegetablesSelectionChange = (index, checked) => {
    this.setState({
      vegetablesSelectedIndex: checked ? 0 : -1,
    })
  }

  onOthersSelectionChange = (index, checked) => {
    this.setState({
      othersSelectedIndex: checked ? 0 : -1,
    })
  }

  onSpecialRequestCheckChange = (checked) => {
    this.setState({
      hasSpecialRequest: checked,
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { carbsSelectedIndex, vegetablesSelectedIndex, othersSelectedIndex, specialRequest } = this.state

    return (
      <ModalContainer>
        <div className='meal-preference-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='meal-preference-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='meal-preference-title'>Edit Meal Preference</div>

          <div className='meal-preference-rate-title'>Rate the Meal</div>
          <Rate
            character={<div className='img-star'/>}
            onChange={this.onChangeMealRate}
          />

          <div className='meal-preference-variation'>
            <div className='meal-preference-variation-title'>Carbs</div>
            <div className='meal-preference-variation-group'>
              <RadioButton checked={carbsSelectedIndex === 0} onCheckChange={(checked) => this.onCarbsSelectionChange(0, checked)}>Rice</RadioButton>
              <RadioButton checked={carbsSelectedIndex === 1} onCheckChange={(checked) => this.onCarbsSelectionChange(1, checked)}>Baked Potato</RadioButton>
              <RadioButton checked={carbsSelectedIndex === 2} onCheckChange={(checked) => this.onCarbsSelectionChange(2, checked)}>No Carb</RadioButton>
            </div>
          </div>

          <div className='meal-preference-variation'>
            <div className='meal-preference-variation-title'>Vegetables</div>
            <div className='meal-preference-variation-group'>
              <RadioButton checked={vegetablesSelectedIndex === 0} onCheckChange={(checked) => this.onVegetablesSelectionChange(0, checked)}>Extra Vegetable</RadioButton>
            </div>
          </div>

          <div className='meal-preference-variation'>
            <div className='meal-preference-variation-title'>Others</div>
            <div className='meal-preference-variation-group'>
              <RadioButton checked={othersSelectedIndex === 0} onCheckChange={(checked) => this.onOthersSelectionChange(0, checked)}>Meal Post House Sauce</RadioButton>
            </div>
          </div>

          <div className='meal-preference-special-request'>
            <Checkbox type={CheckboxType.square} onCheckChange={(checked) => this.onSpecialRequestCheckChange(checked)}>Special Meal Request</Checkbox>
            <textarea className='textarea-special-request' name='specialRequest' value={specialRequest} onChange={this.onChange}/>
          </div>

          <div className='meal-preference-save'>
            <Button className='btn-save' onClick={this.onSave}>Save</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(MealPreferenceModal)
