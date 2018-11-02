import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css'

class SettingsDropdown extends Component {

  render () {
    let { user } = this.props

    return (
      <div className='settings-dropdown'>
        { user.user.first_name }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(SettingsDropdown)
