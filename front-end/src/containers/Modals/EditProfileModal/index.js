import React, { Component } from 'react'
import { connect } from 'react-redux'
import addressParser from 'parse-address-string'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import './styles.css'

// import { updateUserProfile } from '../../../redux/actions/user'
import { closeModal } from '../../../redux/actions/modal'

import imgClose from '../../../assets/images/close_button.svg'
import imgSwitchOff from '../../../assets/images/switch_off.svg'
import imgSwitchOn from '../../../assets/images/switch_on.svg'

class EditProfileModal extends Component {

  constructor (props) {
    super(props)

    let { user } = props.user
    
    this.state = {
      firstName: user.first_name,
      lastName: user.last_name,

      phone: user.phone || '',
      
      street: '',
      apartment: '',
      city: '',
      state: '',
      zip: '',
      instructions: '',

      leaveAtDoor: false,
    }

    this.updateAddress(user.shipping_address)
  }

  updateAddress = (fullAddress) => {
    addressParser(fullAddress, (err, addressObject) => {
      if (!err) {
        this.setState({
          street: (addressObject.street_address1 || '') + ' ' + (addressObject.street_address2 || ''),
          city: addressObject.city || '',
          state: addressObject.state || '',
          ...(addressObject.postal_code && { zip: addressObject.postal_code }),
        })
      }
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onToggleSwitch = () => {
    this.setState({
      leaveAtDoor: !this.state.leaveAtDoor,
    })
  }

  onSave = (e) => {
    e.preventDefault()
    
    // let { firstName, lastName, phone, shippingAddress } = this.state

    // this.props.dispatch(updateUserProfile(this.props.user.user.token, {
    //   first_name: firstName,
    //   last_name: lastName,
    //   phone: phone,
    //   shipping_address: shippingAddress,
    // }))

    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    const { type } = this.props
    const { firstName, lastName, phone, street, apartment, city, state, zip, instructions, leaveAtDoor } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='edit-profile-modal' onClick={(e)=>e.stopPropagation()}>
          <div className='edit-profile-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='edit-profile-title'>{ type === 'Name' ? 'Edit Name' : (type === 'Address' ? 'Edit Address' : 'Contact')}</div>
          <div className='separator'/>

          {/* Form fields */}
          <form className='form-inputs' onSubmit={ this.onSave }>
            { type === 'Name' &&
              <div className='form-double-inputs'>
                <div id='input_firstname' className='form-input'>
                  <div className='form-input-name'>First Name</div>
                  <input required type='text' name='firstName' value={firstName} onChange={this.onChange}/>
                </div>
                <div id='input_lastname' className='form-input'>
                  <div className='form-input-name'>Last Name</div>
                  <input required type='text' name='lastName' value={lastName} onChange={this.onChange}/>
                </div>
              </div>
            }

            { type === 'Phone' &&
              <div className='form-input'>
                <div className='form-input-name'>Phone Number</div>
                <input type='tel' name='phone' value={phone} onChange={this.onChange}/>
              </div>
            }

            { type === 'Address' &&
              <div>
                <div className='form-double-inputs'>
                  <div id='input_street' className='form-input'>
                    <div className='form-input-name'>Delivery Address</div>
                    <input required type='text' name='street' value={street} onChange={this.onChange}/>
                  </div>
                  <div id='input_apartment' className='form-input'>
                    <div className='form-input-name'>Apartment Number</div>
                    <input required type='text' name='apartment' value={apartment} onChange={this.onChange}/>
                  </div>
                </div>

                <div className='form-double-inputs'>
                  <div id='input_city' className='form-input'>
                    <div className='form-input-name'>City</div>
                    <input required type='text' name='city' value={city} onChange={this.onChange}/>
                  </div>
                  <div id='input_state' className='form-input'>
                    <div className='form-input-name'>State</div>
                    <input required type='text' name='state' value={state} onChange={this.onChange}/>
                  </div>
                  <div id='input_zip' className='form-input'>
                    <div className='form-input-name'>Zip Code</div>
                    <input required type='text' name='zip' value={zip} onChange={this.onChange}/>
                  </div>
                </div>

                <div className='form-input'>
                  <div className='form-input-name'>Special Delivery Instructions</div>
                  <textarea name='instructions' value={instructions} onChange={this.onChange} placeholder='Example: Gate Code #: 4856. Please call before you arrive.'/>
                </div>
              </div>
            }

            <div className='buttons'>
              <div className='div-switch clickable' style={{visibility: type === 'Address' ? 'visible' : 'hidden'}}>
                <img src={leaveAtDoor ? imgSwitchOn : imgSwitchOff} alt='switch' onClick={this.onToggleSwitch}/>
                <span>Leave at doorstep or front desk</span>
              </div>

              <div>
                <Button type='submit' className='btn-save'>Save</Button>
                <Button onClick={this.onClose} className='btn-cancel'>Cancel</Button>
              </div>
            </div>
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
