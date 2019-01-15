import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'

import { showModal, ModalType } from '../../../redux/actions/modal'

class CareerPosition extends Component {

  onApply = () => {
    this.props.dispatch(showModal(ModalType.jobApplyModal))
  }
  
  render () {
    return (
      <div className='div-career-position-container'>
        {/* Header */}
        <div className='div-career-position-header'>
          <div className='div-career-position-header-content'>
            <div className='div-career-position-title'>Director of Digital Marketing</div>
            <div className='div-career-position-subtitle'>SAN FRANCISCO ACQUISITION FULL-TIME</div>
          </div>
        </div>

        {/* Content */}
        <div className='div-career-position-content'>
          <div className='div-career-position-content-paragraph'>
            The project manager will be responsible for managing the successful development and
            delivery of a wide range of projects and programs along with the day-to-day operations
            of the Insight team. For this role the candidate should be comfortable with ambiguity,
            having excellent attention to detail, highly proactive with the ability to grow relationships,
            facilitate the creative process, and manage complexity and multiple work streams with ease. 
          </div>

          <div className='div-career-position-content-heading'>What You'll Do</div>
          <div className='div-career-position-content-paragraph'>
            <div className='div-paragraph-line'>Drive execution from concept to live, accountable for meeting milestone commitments.</div>
            <div className='div-paragraph-line'>Create and improve development and release processes.</div>
            <div className='div-paragraph-line'>Create project schedules which maximize feature quality and output.</div>
            <div className='div-paragraph-line'>Create and validate project scope, ensure clear definition of deliverables.</div>
            <div className='div-paragraph-line'>Coordinate external dependencies with supporting organizations across the company.</div>
            <div className='div-paragraph-line'>Identify and manage project risk.</div>
          </div>

          <div className='div-career-position-content-heading'>What You'll Bring</div>
          <div className='div-career-position-content-paragraph'>
            <div className='div-paragraph-line'>5+ years of experience in product management, consumer web and mobile development.</div>
            <div className='div-paragraph-line'>Ability to create wireframes, product specifications and white papers.</div>
            <div className='div-paragraph-line'>Outstanding written and oral communication skills.</div>
            <div className='div-paragraph-line'>Exceptional analytical and quantitative modeling skills with a focus on data-driven decision making.</div>
            <div className='div-paragraph-line'>Ability to operate at an extremely fast pace.</div>
            <div className='div-paragraph-line'>BA/BS, MS or PhD in Computer Science or related technical discipline.</div>
          </div>

          <div className='div-career-position-content-heading'>Benefits and Perks</div>
          <div className='div-career-position-content-paragraph'>
            <div className='div-paragraph-line'>Full benefits, including medical, dental, and vision</div>
            <div className='div-paragraph-line'>401(k) savings plan with a company match</div>
            <div className='div-paragraph-line'>Catered daily lunch and dinners</div>
            <div className='div-paragraph-line'>Unlimited snacks and drinks</div>
            <div className='div-paragraph-line'>Game Room</div>
            <div className='div-paragraph-line'>Commuter benefits</div>
            <div className='div-paragraph-line'>Flexible time off policy</div>
            <div className='div-paragraph-line'>Employee Discount Program (never worry about dinner again)</div>
          </div>

          <div className='div-career-position-content-heading'>EO Statement</div>
          <div className='div-career-position-content-paragraph'>
            Mealpost is committed to creating a diverse environment and is proud to be an equal
            opportunity employer. All qualified applicants will receive consideration for employment
            without regard to race, color, religion, gender, gender identity or expression, sexual orientation,
            national origin, genetics, disability, age, or veteran status. Mealpost is also committed to
            compliance with all fair employment practices regarding citizenship and immigration status. 
          </div>

          {/* Bottom of Content */}
          <div className='div-career-position-apply'>
            <Button className='btn-apply' onClick={this.onApply}>APPLY FOR THIS JOB</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(CareerPosition)
