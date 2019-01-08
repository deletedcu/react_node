import React, { Component } from 'react'
import Button from '../../components/Button'
import BottomForm from '../Home/components/BottomForm'

import './styles.css'

const serviceAreas = [
  'Alameda',
  'Alamo',
  'Alamo Square',
  'Antioch',
  'Bay Point',
  'Berkley',
  'Blackhawk',
  'Brentwood',
  'Bridgehead',
  'Brookshire',
  'Canyon',
  'Clarendon Heights',
  'Clayton',
  'Concord',
  'Diablo',
  'Dublin',
  'El Cerrito',
  'Emeryville',
  'Hayward',
  'Laffayette',
  'Livermore',
  'Martinez',
  'Miraloma Park',
  'Mission Bay',
  'Morago',
  'North Beach',
  'Oakland',
  'Orinda',
  'Piedmont',
  'Pinole',
  'Pittsburg',
  'Potrero Hill',
  'Pleasant Hill',
  'Pleasanton',
  'Presidio Heights',
  'Richmond',
  'Rodeo',
  'San Leandro',
  'San Pablo',
  'San Ramon',
  'South Beach',
  'St. Francis Wood',
  'Stewartville',
  'Walnut Creek',
  'West Portal',
]

class ServiceAreas extends Component {

  constructor (props) {
    super(props)

    this.state = {
      zip: '',
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  onCheckAvailability = () => {

  }

  onClickServiceArea = (serviceArea) => {
    this.props.history.push('/menus')
  }

  render () {
    return (
      <div className='div-service-area-container'>
        {/* Banner and Title */}
        <div className='div-service-area-banner'>
          <div className='div-service-area-title'>
            CHECK AVAILABILITY IN YOUR AREA
          </div>
          <div className='div-service-area-subtitle'>
            Get Quality, Healthy, Chef-Prepared Meals Delivered directly to you.
          </div>
          <div className='div-service-area-search'>
            <input name='zip' value={this.state.zip} onChange={this.onChange} placeholder='ZIP Code'/>
            <Button onClick={this.onCheckAvailability}>Check Availability</Button>
          </div>
        </div>

        {/* Service area grid */}
        <div className='div-service-areas container'>
          <div className='div-service-areas-title'>We also deliver to these cities..</div>
          <div className='div-service-areas-grid'>
            { 
              serviceAreas.map((serviceArea, index) => {
                return <div key={index} className='service-area clickable' onClick={()=>this.onClickServiceArea(serviceArea)}>{serviceArea}</div>
              })
            }
          </div>
        </div>

        {/* Bottom */}
        <div className='div-service-area-bottom'>
          <BottomForm
            title='Get notified when we expand to your City'
          />
        </div>
      </div>
    )
  }
}

export default ServiceAreas
