import React, { Component } from 'react'
import { connect } from 'react-redux'
import Rate from 'rc-rate'
import Button from '../../../components/Button'
import ModalContainer from '../../../components/ModalContainer'

import './styles.css'
import imgClose from '../../../assets/images/close_button.svg'

import { closeModal } from '../../../redux/actions/modal'

class ShareExperienceModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      name: '',
      review: '',

      reviewSubmitted: false,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onChangeRate = (rate) => {
    console.log(rate)
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.setState({
      reviewSubmitted: true,
    })
  }

  render () {
    const { email, name, review, reviewSubmitted } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='share-experience-modal' onClick={(e) => e.stopPropagation()}> 
          {/* Close button */}
          { !reviewSubmitted &&
            <div className='share-experience-close'>
              <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
            </div>
          }

          {/* Title */}
          <div className='share-experience-title'>{ reviewSubmitted ? 'Success' : 'Share Your Experience' }</div>

          {/* Subtitle */}
          { reviewSubmitted &&
            <div className='share-experience-subtitle'>Thank you for sharing your feedback! Your review is greatly appreciated.</div>
          }

          { reviewSubmitted &&
            <Button onClick={this.onClose}>Okay</Button>
          }

          {/* Rate */}
          { !reviewSubmitted &&
          <div className='share-experience-rate'>
            <Rate
              character={<div className='img-star'/>}
              onChange={this.onChangeRate}
            />
          </div>
          }

          {/* Form */}
          { !reviewSubmitted &&
            <form className='share-experience-form' onSubmit={this.onSubmit}>
              <input type='email' name='email' value={email} placeholder='Your e-mail' onChange={this.onChange} required/>
              <input type='text' name='name' value={name} placeholder='Your name' onChange={this.onChange} required/>
              <textarea name='review' value={review} placeholder='Write your review here' onChange={this.onChange} required/>
              <Button>Submit</Button>
            </form>
          }
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(ShareExperienceModal)
