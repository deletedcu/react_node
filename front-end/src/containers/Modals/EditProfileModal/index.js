import React, { Component } from 'react'
import { connect } from 'react-redux'
import addressParser from 'parse-address-string'
import SelectUSState from 'react-select-us-states'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'
import './styles.css'

import { updateUserProfile } from '../../../redux/actions/user'
import { closeModal } from '../../../redux/actions/modal'

// import imgClose from '../../../assets/images/close_button.svg'
import imgDownArrow from '../../../assets/images/down_arrow_green.svg'

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
        }, () => {
          document.getElementById('stateSelector').value = this.state.state || 'AL'
        })
      }
    })
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSelectState = (selectedState) => {
    this.setState({
      state: selectedState,
    })
  }

  onSave = (e) => {
    e.preventDefault()
    
    let { firstName, lastName, phone, street, apartment, city, state, zip } = this.state

    this.props.dispatch(updateUserProfile(this.props.user.user.token, {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      shipping_address: apartment ? `${street}, ${apartment}, ${city}, ${state}, ${zip}` : `${street}, ${city}, ${state}, ${zip}` ,
    }))

    this.props.dispatch(closeModal())
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  render () {
    const { firstName, lastName, phone, street, apartment, city, state, zip, instructions } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='edit-profile-modal' onClick={(e)=>e.stopPropagation()}>
          {/* <div className='edit-profile-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div> */}

          <div className='edit-profile-title'>Edit Profile</div>
          <div className='separator'/>

          {/* Form fields */}
          <form className='form-inputs' onSubmit={ this.onSave }>
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

            <div className='form-double-inputs'>
              <div id='input_street' className='form-input'>
                <div className='form-input-name'>Delivery Address</div>
                <input required type='text' name='street' value={street} onChange={this.onChange}/>
              </div>
              <div id='input_apartment' className='form-input'>
                <div className='form-input-name'>Apartment Number</div>
                <input type='text' name='apartment' value={apartment} onChange={this.onChange}/>
              </div>
            </div>

            <div className='form-double-inputs'>
              <div id='input_city' className='form-input'>
                <div className='form-input-name'>City</div>
                <input required type='text' name='city' value={city} onChange={this.onChange}/>
              </div>

              <div id='input_state' className='form-input'>
                <div className='form-input-name'>State</div>
                <SelectUSState id='stateSelector' className='select-us-state' value={state} onChange={ this.onSelectState }/>
                <img src={imgDownArrow} alt='arrow'/>
              </div>

              <div id='input_zip' className='form-input'>
                <div className='form-input-name'>Zip Code</div>
                <input required type='text' name='zip' value={zip} onChange={this.onChange}/>
              </div>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Phone Number</div>
              <input type='tel' name='phone' value={phone} onChange={this.onChange}/>
            </div>

            <div className='form-input'>
              <div className='form-input-name'>Special Delivery Instructions</div>
              <textarea name='instructions' value={instructions} onChange={this.onChange}/>
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

function mapStateToProps (state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(EditProfileModal)
