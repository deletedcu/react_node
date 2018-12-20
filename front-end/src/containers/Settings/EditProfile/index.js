import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'

import { showModal, ModalType } from '../../../redux/actions/modal'
import { showNotification } from '../../../services/notification'

import { updatePassword } from '../../../redux/actions/user'

class EditProfile extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      showPasswordForm: false,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onTogglePasswordForm = () => {
    this.setState({
      showPasswordForm: !this.state.showPasswordForm,
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    })
  }

  onEdit = () => {
    this.props.dispatch(showModal(ModalType.editProfileModal))
  }

  onChangePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = this.state

    if (!currentPassword) {
      showNotification('Please enter your current password!', 'error');
      return;
    }

    if (!newPassword) {
      showNotification('Please enter new password!', 'error');
      return;
    }

    if (newPassword !== confirmPassword) {
      showNotification('Please confirm new password!', 'error');
      return;
    }

    this.props.dispatch(updatePassword(this.props.user.user.token, currentPassword, newPassword))

    this.onTogglePasswordForm()
  }

  render () {
    const user = this.props.user.user
    const { currentPassword, newPassword, confirmPassword, showPasswordForm } = this.state

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

            <div className='div-profile-info-title clickable' onClick={this.onTogglePasswordForm}>Update Password</div>
            { showPasswordForm &&
              <div className='div-profile-update-password-inputs'>
                <div className='div-profile-update-password-input'>
                  <div className='div-profile-update-password-input-title'>Current Password</div>
                  <input name='currentPassword' value={currentPassword} type='password' onChange={this.onChange}/>
                </div>
                <div className='div-profile-update-password-input'>
                  <div className='div-profile-update-password-input-title'>New Password</div>
                  <input name='newPassword' value={newPassword} type='password' onChange={this.onChange}/>
                </div>
                <div className='div-profile-update-password-input'>
                  <div className='div-profile-update-password-input-title'>Confirm Password</div>
                  <input name='confirmPassword' value={confirmPassword} type='password' onChange={this.onChange}/>
                </div>
                <Button onClick={this.onChangePassword}>Change</Button>
              </div>
            }
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
