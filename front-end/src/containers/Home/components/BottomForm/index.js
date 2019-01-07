import React, { Component } from 'react'
import Button from '../../../../components/Button'
import './styles.css'

class BottomForm extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onSubmit = () => {
    
  }

  render () {
    return (
      <div className='bottom-form'>
        <div className='bottom-form-title'>STAY IN TOUCH</div>

        <div className='bottom-form-inputs'>
          <input type='email' name='email' value={this.state.email} onChange={this.onChange} placeholder='Email Address'/>
          <Button className='btn-start' onClick={this.onSubmit}>SUBMIT</Button>
        </div>

        <div className='bottom-form-link'>Sign up for future offers, recipes, news & more</div>
      </div>
    )
  }
}

export default BottomForm
