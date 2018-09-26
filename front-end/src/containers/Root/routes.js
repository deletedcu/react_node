import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/home' component={ AsyncHome } />

    <Redirect to='/home' />
  </Switch>
)

export default routes
