import React, { Component } from 'react'
import classNames from 'classnames'
import Button from '../../../../components/Button'

import './styles.css'

import imgCheck from '../../../../assets/images/right.svg'

export const CheckoutFormStatus = {
  'editing': 1,
  'disabled': 2,
  'completed': 3,
}

class CheckoutStepForm extends Component {

  onSubmit = (e) => {
    e.preventDefault()

    this.props.onSubmit()
  }

  render () {
    const formStatus = this.props.status

    return (
      <div className={ classNames('checkout-step-form-container', this.props.className) } style={this.props.style}>
        {/* Header */}
        <div className={ classNames('checkout-step-form-header', {'checkout-step-form-header-inactive': formStatus !== CheckoutFormStatus.editing }) }>
          { formStatus === CheckoutFormStatus.completed ?
            <img className='img-checked' src={ imgCheck } alt='check'/>
            :
            <div className={ classNames('div-step-number', {'div-step-number-inactive': formStatus === CheckoutFormStatus.disabled}) }>
              { this.props.number }
            </div>
          }
          <div className='div-checkout-step-title'>
            { this.props.title }
          </div>
        </div>

        { formStatus === CheckoutFormStatus.editing &&
          <div>
            {/* Separator */}
            <div className='checkout-step-form-separator'/>

            {/* Body */}
            <div className='checkout-step-form-body'>
              <form onSubmit={ this.onSubmit }>
                {/* Form */}
                <div className='div-checkout-step-form'>
                  { this.props.children }
                </div>

                {/* Separator */}
                <div className='checkout-step-form-separator'/>

                {/* Button Area */}
                <div className='div-checkout-step-form-footer'>
                  <Button className='btn-checkout-step-form'>{ this.props.buttonTitle }</Button>
                </div>
              </form>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CheckoutStepForm
