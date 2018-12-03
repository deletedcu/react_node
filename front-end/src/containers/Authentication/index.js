import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import routes from './routes'

import './styles.css'

import { hideSidebar } from '../../redux/actions/sideBar'

class Authentication extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  render () {
    return (
      <div className='div-auth-container'>
        { routes }    
      </div>
    )
  }
}

export default connect()(Authentication)
