import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'

import { updateUserProfile, updatePassword } from '../../../redux/actions/user'

class EditProfile extends Component {

  constructor (props) {
    super(props)

    this.state = {
      name: props.user.user.name,
      deliveryAddress: props.user.user.shipping_address,
      phone: props.user.user.phone,
      email: props.user.user.email,

      editName: '',
      editDeliveryAddress: '',
      editPhone: '',
      editPassword: '',

      isEditMode: false,
    }
  }

  componentWillReceiveProps ({ user }) {
    this.setState({
      name: user.user.name,
      deliveryAddress: user.user.shipping_address,
      phone: user.user.phone,
      email: user.user.email,
    })
  }


  onEdit = () => {
    if (this.state.isEditMode) {
      // should save changes
      const { editName, editPassword, editPhone, editDeliveryAddress, email, name, phone, deliveryAddress } = this.state

      this.props.dispatch(updateUserProfile(this.props.user.user.token, {
        name: editName || name,
        shipping_address: editDeliveryAddress || deliveryAddress,
        phone: editPhone || phone,
        email: email,
      }))

      if (this.state.editPassword) {
        this.props.dispatch(updatePassword(this.props.user.user.token, editPassword))
      }

      this.setState({
        isEditMode: false,
      })
    } else {
      this.setState({
        isEditMode: true,
        editName: '',
        editPassword: '',
        editDeliveryAddress: '',
        editPhone: '',
      })
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { 
      isEditMode,
      name, deliveryAddress, phone, email,
      editName, editDeliveryAddress, editPhone, editPassword,
    } = this.state

    return (
      <div className='div-edit-profile-container'>
        <div className='div-profile-info'>
          <div className='div-title'>Account Information</div>

          <div className='div-profile-input'>
            <span className='span-input-title'>Email</span>
            <span className='span-input-value'>{ email }</span>
          </div>

          <div className='div-profile-input'>
            <span className='span-input-title'>Password</span>
            {
              isEditMode ?
              <input name='editPassword' value={editPassword} placeholder='⬤⬤⬤⬤⬤⬤⬤⬤' onChange={this.onChange}/>
              :
              <span className='span-input-value'>⬤⬤⬤⬤⬤⬤⬤⬤</span>
            }
          </div>

          <div className='div-profile-input'>
            <span className='span-input-title'>Name</span>
            {
              isEditMode ?
              <input name='editName' value={editName} placeholder={name} onChange={this.onChange}/>
              :
              <span className='span-input-value'>{name}</span>
            }
          </div>

          <div className='div-profile-input'>
            <span className='span-input-title'>Delivery Address</span>
            {
              isEditMode ?
              <input name='editDeliveryAddress' value={editDeliveryAddress} placeholder={deliveryAddress} onChange={this.onChange}/>
              :
              <span className='span-input-value'>{deliveryAddress}</span>
            }
          </div>

          <div className='div-profile-input'>
            <span className='span-input-title'>Phone Numer</span>
            {
              isEditMode ?
              <input type='tel' name='editPhone' value={editPhone} placeholder={phone} onChange={this.onChange}/>
              :
              <span className='span-input-value'>{phone}</span>
            }
          </div>

          <Button onClick={this.onEdit}>{ isEditMode ? 'Save' : 'Edit Account'}</Button>
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
