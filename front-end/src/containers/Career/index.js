import React, { Component } from 'react'
import { connect } from 'react-redux'
import routes from './routes'

import { hideSidebar } from '../../redux/actions/sideBar'

class Career extends Component {

  componentDidMount () {
    this.props.dispatch(hideSidebar())
  }

  render () {
    return (
      <div>
        { routes }    
      </div>
    )
  }
}

export default connect()(Career)
