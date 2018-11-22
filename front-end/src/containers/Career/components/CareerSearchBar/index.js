import React, { Component } from 'react'
import Button from '../../../../components/Button'

import './styles.css'

class CareerSearchBar extends Component {

  constructor (props) {
    super(props)

    this.state = {
      search: '',
    }
  }

  onSearch = () => {
    this.props.onSearch(this.state.search)
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () { 
    return (
      <div className='career-search-bar'>
        <input type='text' name='search' value={this.state.search} onChange={this.onChange} placeholder='Enter job title, location or department'/>
        <Button className='btn-search' onClick={this.onSearch}>Search</Button>
      </div>
    )
  }
}

export default CareerSearchBar
