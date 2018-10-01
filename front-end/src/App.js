import React, { Component } from 'react'
import Root from './containers/Root'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';

import './styles/styles.css'

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <Route path='/' component={Root} />
        </BrowserRouter>
      </Provider> 
    )
  }
}

export default App
