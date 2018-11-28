import React, { Component } from 'react'
import Root from './containers/Root'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import ScrollToTop from './components/ScrollToTop'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'rc-rate/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import './styles/styles.css'

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <BrowserRouter>
          <ScrollToTop>
            <Route path='/' component={Root} />
          </ScrollToTop>
        </BrowserRouter>
      </Provider> 
    )
  }
}

export default App
