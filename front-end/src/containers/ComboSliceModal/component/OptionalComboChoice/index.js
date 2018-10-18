import React, { Component } from 'react'
import Checkbox, { CheckboxType } from '../../../../components/Checkbox'

import './styles.css'

class OptionalComboChoice extends Component {

  render () {
    return (
      <div className='div-optional-combo-container'>
        <div className='div-optional-combo-title'>
          <span>People also added</span>
          <span>(Optional)</span>
        </div>

        <div className='div-optional-combo-list'>
          <Checkbox className='combo-checkbox' type={CheckboxType.square} onCheckChange={ () => {} }>
            Bacon & Cheese Potato
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum nisi vitae ligula congue sagittis. Curabitur semper .</div>
          </Checkbox>
          <Checkbox className='combo-checkbox' type={CheckboxType.square} onCheckChange={ () => {} }>
            Bacon & Cheese Potato
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum nisi vitae ligula congue sagittis. Curabitur semper .</div>
          </Checkbox>
          <Checkbox className='combo-checkbox' type={CheckboxType.square} onCheckChange={ () => {} }>
            Bacon & Cheese Potato
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum nisi vitae ligula congue sagittis. Curabitur semper .</div>
          </Checkbox>
        </div>
      </div>
    )
  }
}

export default OptionalComboChoice
