import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import './styles.css'

import { updatePassword } from '../../../redux/actions/user'
import { closeModal } from '../../../redux/actions/modal'
import { showNotification } from '../../../services/notification'

class UpdatePasswordModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSave = (e) => {
    e.preventDefault()

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

    this.props.dispatch(closeModal())
    this.props.dispatch(updatePassword(this.props.user.user.token, currentPassword, newPassword))
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    const { currentPassword, newPassword, confirmPassword } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='edit-profile-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='edit-profile-title'>Update Password</div>
          <div className='separator'/>

          {/* Form fields */}
          <form className='form-inputs' onSubmit={ this.onSave }>
            <div className='form-input'>
              <div className='form-input-name'>Current Password</div>
              <input type='password' name='currentPassword' value={currentPassword} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>New Password</div>
              <input type='password' name='newPassword' value={newPassword} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Confirm Password</div>
              <input type='password' name='confirmPassword' value={confirmPassword} onChange={this.onChange}/>
            </div>

            <div className='buttons'>
              <Button type='submit' className='btn-save'>Save</Button>
              <Button onClick={this.onClose} className='btn-cancel'>Cancel</Button>
            </div>
          </form>
        </div>
      </ModalContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(UpdatePasswordModal)
