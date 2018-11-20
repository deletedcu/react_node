import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

import imgEdit from '../../../assets/images/edit.svg'

import { showModal, ModalType } from '../../../redux/actions/modal'

class EditProfile extends Component {

  onEdit = () => {
    this.props.dispatch(showModal(ModalType.editProfileModal))
  }

  render () {
    const user = this.props.user.user

    return (
      <div className='div-edit-profile-container'>
        <div className='div-profile-info'>
          <div className='div-profile-info-title-list'>
            <div className='div-profile-info-title'>User Name</div>
            <div className='div-profile-info-title'>Shipping Address</div>
            <div className='div-profile-info-title'>Zip</div>
            <div className='div-profile-info-title'>Phone Number</div>
            <div className='div-profile-info-title'>Email Address</div>
          </div>

          <div className='div-profile-info-text-list'>
            <div className='div-profile-info-text'>{`${user.first_name} ${user.last_name}`}</div>
            <div className='div-profile-info-text'>{user.shipping_address || '-'}</div>
            <div className='div-profile-info-text'>{user.zip || '-'}</div>
            <div className='div-profile-info-text'>{user.phone || '-'}</div>
            <div className='div-profile-info-text'>{user.email}</div>
          </div>
        </div>

        <div className='div-profile-edit'>
          <img className='img-profile-edit clickable' src={imgEdit} alt='edit' onClick={this.onEdit}/>
        </div>
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
