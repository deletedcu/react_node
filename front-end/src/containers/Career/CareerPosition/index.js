import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../../../components/Button'

import './styles.css'
import imgDot from '../../../assets/images/dot.svg'

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
            <div className='div-career-position-header-left'>
              <div className='div-career-position-title'>Director of Digital Marketing</div>
              <div className='div-career-position-subtitle'>SAN FRANCISCO ACQUISITION FULL-TIME</div>
            </div>
            <Button className='btn-apply' onClick={this.onApply}>APPLY FOR THIS JOB</Button>
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
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Drive execution from concept to live, accountable for meeting milestone commitments.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Create and improve development and release processes.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Create project schedules which maximize feature quality and output.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Create and validate project scope, ensure clear definition of deliverables.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Coordinate external dependencies with supporting organizations across the company.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Identify and manage project risk. </span></div>
          </div>

          <div className='div-career-position-content-heading'>What You'll Bring</div>
          <div className='div-career-position-content-paragraph'>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>5+ years of experience in product management, consumer web and mobile development.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Ability to create wireframes, product specifications and white papers. </span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Outstanding written and oral communication skills.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Exceptional analytical and quantitative modeling skills with a focus on data-driven decision making.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Ability to operate at an extremely fast pace.</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>BA/BS, MS or PhD in Computer Science or related technical discipline.</span></div>
          </div>

          <div className='div-career-position-content-heading'>Benefits and Perks</div>
          <div className='div-career-position-content-paragraph'>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Full benefits, including medical, dental, and vision</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>401(k) savings plan with a company match</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Catered daily lunch and dinners</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Unlimited snacks and drinks</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Game Room</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Commuter benefits</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Flexible time off policy</span></div>
            <div className='div-career-position-content-dot-line'><img src={imgDot} alt='dot'/><span>Employee Discount Program (never worry about dinner again)</span></div>
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
            <span className='span-info'>Jobs powered by LEVER</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(CareerPosition)
