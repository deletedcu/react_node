import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'

import { updateUserProfile, updatePassword } from '../../../redux/actions/user'

class EditProfile extends Component {

  constructor (props) {
    super(props)

    this.state = {
      firstName: props.user.user.first_name,
      lastName: props.user.user.last_name,
      deliveryAddress: props.user.user.shipping_address,
      phone: props.user.user.phone,
      email: props.user.user.email,
      password: '',

      isEditMode: false,
    }
  }

  componentWillReceiveProps ({ user }) {
    this.setState({
      firstName: user.user.first_name,
      lastName: user.user.last_name,
      deliveryAddress: user.user.shipping_address,
      phone: user.user.phone,
      email: user.user.email,
    })
  }


  onEdit = () => {
    if (this.state.isEditMode) {
      // should save changes
      this.props.dispatch(updateUserProfile(this.props.user.user.token, {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        shipping_address: this.state.deliveryAddress,
        phone: this.state.phone,
        email: this.state.email,
      }))

      if (this.state.password) {
        this.props.dispatch(updatePassword(this.props.user.user.token, this.state.password))
      }

      this.setState({
        isEditMode: false,
      })
    } else {
      this.setState({
        isEditMode: true,
        password: '',
      })
    }
  }

  onChangePassword = () => {
    this.setState({
      isEditMode: true,
      password: '',
    }, () => {
      this.refs.passwordInput.focus()
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { firstName, lastName, password, deliveryAddress, phone, email, isEditMode } = this.state

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

          { !isEditMode ?
            <div className='div-profile-info-text-list'>
              <div className='div-profile-info-text'>{`${firstName} ${lastName}`}</div>
              <div className='div-profile-info-text'>{deliveryAddress || '-'}</div>
              <div className='div-profile-info-text'>{phone || '-'}</div>
              <div className='div-profile-info-text'>{email}</div>
              <div className='div-profile-info-text password'>⬤⬤⬤⬤⬤⬤⬤⬤</div>
            </div>
            :
            <div className='div-profile-info-input-list'>
              <div className='div-profile-info-double-input'>
                <input name='firstName' value={firstName} onChange={this.onChange} required/>
                <input name='lastName' value={lastName} onChange={this.onChange} required/>
              </div>
              <div className='div-profile-info-input'>
                <input name='deliveryAddress' value={deliveryAddress} onChange={this.onChange} required/>
              </div>
              <div className='div-profile-info-input'>
                <input type='tel' name='phone' value={phone} onChange={this.onChange} required/>
              </div>
              <div className='div-profile-info-input'>
                <input className='input-readonly' type='email' name='email' value={email} onChange={this.onChange} required readOnly/>
              </div>
              <div className='div-profile-info-input'>
                <input ref='passwordInput' type='password' name='password' value={password} onChange={this.onChange}/>
              </div>
            </div>
          }
        </div>

        { !isEditMode ?
          <Button className='btn-edit' onClick={this.onEdit}>Edit</Button>
          :
          <Button className='btn-save' onClick={this.onSave}>Save</Button>
        }
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
