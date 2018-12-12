import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/Button'
import './styles.css'

class BottomForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      zip: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    return (
      <div className='bottom-form'>
        <div className='bottom-form-title'>Healthy, Delicious, Chef-Inspired Meals,</div>
        <div className='bottom-form-title'>Delivered.</div>

        <div className='bottom-form-inputs'>
          <input type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder='Email'/>
          <input type='text' name='zip' value={this.state.zip} onChange={this.onChange} placeholder='Zip Code'/>
        </div>

        <Button className='btn-start' onClick={this.onGetStarted}>GET STARTED</Button>

        <div className='bottom-form-link'>Already have an account? <Link to='/auth/login'>Log in</Link></div>
        <div className='bottom-form-link'>By continuing, you agree to our <Link to='/terms-of-service'>Terms</Link> and <Link to='/terms-of-service'>Privacy Policy</Link></div>
      </div>
    )
  }
}

export default BottomForm
