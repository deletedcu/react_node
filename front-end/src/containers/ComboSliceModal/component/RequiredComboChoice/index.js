import React, { Component } from 'react'
import Checkbox, { CheckboxType } from '../../../../components/Checkbox'

import './styles.css'

class RequiredComboChoice extends Component {

  render () {
    return (
      <div className='div-required-combo-container'>
        <div className='div-required-combo-title'>
          <span>Combo Slice Choice</span>
          <span className='required-text'>Required</span>
        </div>

        <div className='div-required-combo-list'>
          <Checkbox className='combo-checkbox' type={CheckboxType.round} onCheckChange={ () => {} }>a) Fries</Checkbox>
          <div className='div-combo-checkbox-separator'></div>
          <Checkbox className='combo-checkbox' type={CheckboxType.round} onCheckChange={ () => {} }>b) Sour Cream & Chive Potato</Checkbox>
          <div className='div-combo-checkbox-separator'></div>
          <Checkbox className='combo-checkbox' type={CheckboxType.round} onCheckChange={ () => {} }>c) Plain Potato</Checkbox>
          <div className='div-combo-checkbox-separator'></div>
          <Checkbox className='combo-checkbox' type={CheckboxType.round} onCheckChange={ () => {} }>d) Small Chilli</Checkbox>
          <div className='div-combo-checkbox-separator'></div>
          <Checkbox className='combo-checkbox' type={CheckboxType.round} onCheckChange={ () => {} }>e) Garden Side Salad</Checkbox>
        </div>
      </div>
    )
  }
}

export default RequiredComboChoice
