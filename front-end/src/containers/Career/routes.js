import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncCareerList = asyncComponent(() => import('./CareerList'))
const AsyncCareerPosition = asyncComponent(() => import('./CareerPosition'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/career/list' component={ AsyncCareerList } />
    <Route path='/career/position' component={ AsyncCareerPosition } />

    <Redirect to='/career/list' />
  </Switch>
)

export default routes
