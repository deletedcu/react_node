import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

class MenuModal extends Component {

  render () {
    return (
      <div className='div-menu-modal-container'>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    menuModal: state.menuModal,
  }
}

export default connect(mapStateToProps)(MenuModal)
