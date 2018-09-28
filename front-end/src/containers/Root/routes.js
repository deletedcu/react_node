import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))
const AsyncMenu = asyncComponent(() => import('../Menus'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/home' component={ AsyncHome } />
    <Route path='/menus' component={ AsyncMenu } />

    <Redirect to='/home' />
  </Switch>
)

export default routes
