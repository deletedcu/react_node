import React, { Component } from 'react'
import { connect } from 'react-redux'
import ModalContainer from '../../../components/ModalContainer'
import Button from '../../../components/Button'
import Checkbox, { CheckboxType } from '../../../components/Checkbox'

import './styles.css'
import imgClose from '../../../assets/images/close_button_transparent.svg'
import imgPrev from '../../../assets/images/prev.svg'
import imgNext from '../../../assets/images/next.svg'

import { closeModal } from '../../../redux/actions/modal'
import { showNotification } from '../../../services/notification'

const JobApplyStep = {
  personalInfo: 0,
  additionalInfo: 1,
  diversitySurvey: 2,
}

class JobApplyModal extends Component {

  constructor (props) {
    super(props)

    this.state = {
      currentStep: JobApplyStep.personalInfo,

      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      why: '',
      linkedin: '',
      website: '',
      ethnicity: 0,
      resumeFile: null,
      coverletterFile: null,
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onEthnicityChange = (selectedIndex) => {
    this.setState({
      ethnicity: selectedIndex,
    })
  }

  onClose = () => {
    this.props.dispatch(closeModal())
  }

  onBack = () => {
    this.setState({
      currentStep: this.state.currentStep === JobApplyStep.diversitySurvey ? JobApplyStep.additionalInfo : JobApplyStep.personalInfo,
    })
  }

  onNext = () => {
    if (this.state.currentStep === JobApplyStep.personalInfo) {
      const { firstName, location, resumeFile, coverletterFile } = this.state
      
      if (!firstName) {
        showNotification('Please input your first name', 'warning')
        return
      }

      if (!location) {
        showNotification('Please input your location', 'warning')
        return
      }

      if (!resumeFile) {
        showNotification('Please upload your resume', 'warning')
        return
      }

      if (!coverletterFile) {
        showNotification('Please upload your cover letter', 'warning')
        return
      }

      this.setState({
        currentStep: JobApplyStep.additionalInfo,
      })
    } else {
      this.setState({
        currentStep: JobApplyStep.diversitySurvey,
      })
    }
  }

  onAttachResume = () => {
    this.refs.resumeInput.click()
  }

  onAttachCoverLetter = () => {
    this.refs.coverletterInput.click()
  }

  onUploadCoverLetter = (e) => {
    this.setState({
      coverletterFile: e.target.files[0],
    })
  }

  onUploadResume = (e) => {
    this.setState({
      resumeFile: e.target.files[0],
    })
  }

  onSubmit = () => {

  }

  render () {
    const { currentStep, ethnicity } = this.state

    return (
      <ModalContainer darkMode={true}>
        <div className='job-apply-modal'>
          {/* Header */}
          <div className='job-apply-close'>
            <img className='img-close clickable' src={imgClose} alt='close' onClick={this.onClose}/>
          </div>

          <div className='job-apply-title'>
            { currentStep === JobApplyStep.personalInfo ? 'APPLY FOR THIS JOB' : ( currentStep === JobApplyStep.additionalInfo ? 'ADDITIONAL INFO' : 'DIVERSITY SURVEY' ) }
          </div>

          {/* Form */}
          { 
            currentStep === JobApplyStep.personalInfo &&
            <div className='job-apply-form'>
              <div className='job-apply-form-double-input'>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>First Name*</div>
                  <input name='firstName' value={this.state.firstName} onChange={this.onChange}/>
                </div>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>Last Name</div>
                  <input name='lastName' value={this.state.lastName} onChange={this.onChange}/>
                </div>
              </div>

              <div className='job-apply-form-double-input'>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>Email Address</div>
                  <input type='email' name='email' value={this.state.email} onChange={this.onChange}/>
                </div>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>Phone</div>
                  <input type='tel' name='phone' value={this.state.phone} onChange={this.onChange}/>
                </div>
              </div>

              <div className='job-apply-form-single-input'>
                <div className='job-apply-form-input-title'>Location (City)*</div>
                <input name='location' value={this.state.location} onChange={this.onChange}/>
              </div>

              <div className='job-apply-form-double-input'>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>RESUME/CV*</div>
                  <Button className='btn-attach' onClick={this.onAttachResume}>Attach</Button>
                  <input className='input-file-uploader' ref='resumeInput' type='file' onChange={this.onUploadResume}/>
                </div>
                <div className='job-apply-form-single-input'>
                  <div className='job-apply-form-input-title'>COVER LETTER*</div>
                  <Button className='btn-attach' onClick={this.onAttachCoverLetter}>Attach</Button>
                  <input className='input-file-uploader' ref='coverletterInput' type='file' onChange={this.onUploadCoverLetter}/>
                </div>
              </div>
            </div>
          }

          { 
            currentStep === JobApplyStep.additionalInfo &&
            <div className='job-apply-form'>
              <div className='job-apply-form-single-input'>
                <div className='job-apply-form-input-title'>Why do you want to work at Mealpost?</div>
                <textarea name='why' value={this.state.why} onChange={this.onChange}/>
              </div>

              <div className='job-apply-form-single-input'>
                <div className='job-apply-form-input-title'>Linkedin Profile</div>
                <input type='url' name='linkedin' value={this.state.linkedin} onChange={this.onChange}/>
              </div>

              <div className='job-apply-form-single-input'>
                <div className='job-apply-form-input-title'>Website</div>
                <input type='url' name='website' value={this.state.website} onChange={this.onChange}/>
              </div>
            </div>
          }

          { 
            currentStep === JobApplyStep.diversitySurvey &&
            <div className='job-apply-form'>
              <div className='job-apply-form-description'>
                Mealpost is dedicated to creating and sustaining a diverse workplace. To achieve
                this, we have some questions which will help us see how well we are doing, and
                find out where we can do better. The questions are voluntary and your answers
                are anonymous. They will not be attached to your application or visible by anyone
                in the interview process. Participating or not participating in this survey will not
                impact the outcome of your application.
              </div>
              <div className='job-apply-form-selection-group'>
                <div className='job-apply-form-selection-group-title'>SELECT ETHNICITY/RACE</div>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 0} onCheckChange={(checked) => this.onEthnicityChange(0)}>African-American/Black</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 1} onCheckChange={(checked) => this.onEthnicityChange(1)}>American Indian or Alaska Native</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 2} onCheckChange={(checked) => this.onEthnicityChange(2)}>Asian</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 3} onCheckChange={(checked) => this.onEthnicityChange(3)}>Hispanic/Latinx</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 4} onCheckChange={(checked) => this.onEthnicityChange(4)}>Middle Eastern</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 5} onCheckChange={(checked) => this.onEthnicityChange(5)}>Mixed Race</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 6} onCheckChange={(checked) => this.onEthnicityChange(6)}>Native Hawaiian or Pacific Islander</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 7} onCheckChange={(checked) => this.onEthnicityChange(7)}>Caucasian/White</Checkbox>
                <Checkbox type={CheckboxType.square} checked={ethnicity === 8} onCheckChange={(checked) => this.onEthnicityChange(8)}>Prefer not to answer</Checkbox>
              </div>
            </div>
          }

          {/* Next/Prev buttons */}
          <div className='job-apply-next-prev-buttons'>
            { 
              currentStep !== JobApplyStep.personalInfo && 
              <Button className='btn-move' onClick={this.onBack}>Back<img className='img-move' src={imgPrev} alt='back'/></Button>
            }
            { 
              currentStep !== JobApplyStep.diversitySurvey && 
              <Button className='btn-move' onClick={this.onNext}>Next<img className='img-move' src={imgNext} alt='next'/></Button>
            }
            { 
              currentStep === JobApplyStep.diversitySurvey && 
              <Button className='btn-submit' onClick={this.onSubmit}>Submit</Button>
            }
          </div>
        </div>
      </ModalContainer>
    )
  }
}

export default connect()(JobApplyModal)
