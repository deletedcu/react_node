import React, { Component } from 'react'
import ModalContainer from '../../components/ModalContainer'
import RequiredComboChoice from './component/RequiredComboChoice'
import OptionalComboChoice from './component/OptionalComboChoice'
import NumericCounter from '../../components/NumericCounter'
import Button from '../../components/Button'

import './styles.css'

class ComboSliceModal extends Component {

  onIncrement = () => {

  }

  onDecrement = () => {
    
  }

  render () {
    return (
      <ModalContainer>
        <div className='div-combo-slice-modal-center'>
          <div className='div-combo-slice-modal-center-content'>
            {/* Required list */}
            <RequiredComboChoice
            />

            {/* Optional list */}
            <OptionalComboChoice
            />

            {/* Extra instructions */}
            <div className='div-extra-instructions'>
              <div className='div-extra-instructions-title'>Extra Instructions</div>
              <textarea className='textarea-instructions' placeholder='I am alergic to banana'/>
            </div>
          </div>

          {/* Buy area */}
          <div className='div-combo-slice-modal-center-buy'>
            <NumericCounter
              className='buy-numeric-counter'
              onIncrement={ this.onIncrement }
              onDecrement={ this.onDecrement }
            />
            <Button className='btn-add-to-cart'>Add to Cart-$9.70</Button>
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default ComboSliceModal
