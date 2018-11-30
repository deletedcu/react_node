import React, { Component } from 'react'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'

import './styles.css'

class InvitationModal extends Component {

  render () {
    return (
      <ModalContainer darkMode={true}>
        <div className='invitation-modal'>
        </div>
      </ModalContainer>
    )
  }
}

export default InvitationModal
