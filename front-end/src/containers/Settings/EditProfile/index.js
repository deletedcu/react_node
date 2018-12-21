import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'

import { showModal, ModalType } from '../../../redux/actions/modal'

class EditProfile extends Component {

  onEdit = () => {
    this.props.dispatch(showModal(ModalType.editProfileModal))
  }

  onChangePassword = () => {
    this.props.dispatch(showModal(ModalType.updatePasswordModal))
  }

  render () {
    const user = this.props.user.user

    return (
      <div className='div-edit-profile-container'>
        <div className='div-profile-info'>
          <div className='div-profile-info-title-list'>
            <div className='div-profile-info-title'>Name</div>
            <div className='div-profile-info-title'>Delivery Address</div>
            <div className='div-profile-info-title'>Phone Number</div>
            <div className='div-profile-info-title'>Email Address</div>
            <div className='div-profile-info-title'>Password</div>
          </div>

          <div className='div-profile-info-text-list'>
            <div className='div-profile-info-text'>{`${user.first_name} ${user.last_name}`}</div>
            <div className='div-profile-info-text'>{user.shipping_address || '-'}</div>
            <div className='div-profile-info-text'>{user.phone || '-'}</div>
            <div className='div-profile-info-text'>{user.email}</div>

            <div className='div-profile-info-title clickable' onClick={this.onChangePassword}>Update Password</div>
          </div>
        </div>

        <Button className='btn-edit' onClick={this.onEdit}>Edit</Button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(EditProfile)
