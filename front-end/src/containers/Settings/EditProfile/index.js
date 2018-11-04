import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'
import Checkbox, { CheckboxType } from '../../../components/Checkbox'
import './styles.css'

class EditProfile extends Component {

  constructor (props) {
    super (props)

    let { user } = props.user

    this.state = {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone || '',
      country: user.country || '',
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
    console.log(e)
  }

  onCancel = () => {
    this.props.history.push('/home')
  }

  render () {
    return (
      <div className='div-edit-profile-container'>
        {/* Form header */}
        <div className='div-form-header'>
          Edit Profile
        </div>

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
            <div className='form-input-name'>Country</div>
            <input type='text' name='country' value={this.state.country} onChange={this.onChange}/>
          </div>

          <div className='form-input'>
            <div className='form-input-name'>New Password</div>
            <input type='password' name='password' value={this.state.password} onChange={this.onChange} placeholder='6 characters or more'/>
          </div>

          <div className='form-checkbox'>
            <Checkbox type={CheckboxType.square} onCheckChange={ () => {} }>Receive order status updates via text.</Checkbox>
          </div>

          <div className='form-separator'>
          </div>

          <div className='div-buttons'>
            <Button className='btn-cancel' onClick={this.onCancel}>Cancel</Button>
            <Button type='submit' className='btn-save'>Save</Button>
          </div>
        </form>
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
