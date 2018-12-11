import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import './styles.css'

import { updateUserProfile } from '../../../redux/actions/user'
import { closeModal } from '../../../redux/actions/modal'

import imgClose from '../../../assets/images/close_button.svg'

class EditProfileModal extends Component {

  constructor (props) {
    super(props)

    let { user } = props.user
    
    this.state = {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone || '',
      zip: user.zip || '',
      shippingAddress: user.shipping_address || '',
      password: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSave = (e) => {
    e.preventDefault()
    
    let { firstName, lastName, email, phone, shippingAddress, password, zip } = this.state

    this.props.dispatch(updateUserProfile(this.props.user.user.token, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      zip: zip,
      shipping_address: shippingAddress,
      password: password,
    }))

    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    return (
      <ModalContainer>
        <div className='edit-profile-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='edit-profile-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='edit-profile-title'>Edit Profile</div>

          {/* Form fields */}
          <form className='form-inputs' onSubmit={ this.onSave }>
            <div className='form-double-inputs'>
              <div id='input_firstname' className='form-input'>
                <div className='form-input-name'>First Name</div>
                <input required type='text' name='firstName' value={this.state.firstName} onChange={this.onChange}/>
              </div>
              <div id='input_lastname' className='form-input'>
                <div className='form-input-name'>Last Name</div>
                <input required type='text' name='lastName' value={this.state.lastName} onChange={this.onChange}/>
              </div>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Email Address</div>
              <input required type='email' name='email' value={this.state.email} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Phone Number</div>
              <input type='tel' name='phone' value={this.state.phone} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Zip</div>
              <input type='text' name='zip' value={this.state.zip} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Shipping Address</div>
              <input type='text' name='shippingAddress' value={this.state.shippingAddress} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>New Password</div>
              <input type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder='6 characters or more'/>
            </div>

            <Button type='submit' className='btn-save'>Save</Button>
          </form>
        </div>
      </ModalContainer>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(EditProfileModal)
