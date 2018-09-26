import React, { Component } from 'react'
import Root from './containers/Root'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import './styles/styles.css'

class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <Route path='/' component={Root} />
        </BrowserRouter>
    )
  }
}

export default App
