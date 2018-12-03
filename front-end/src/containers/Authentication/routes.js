import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncLogin = asyncComponent(() => import('./Login'))
const AsyncSignup = asyncComponent(() => import('./Signup'))
const AsyncForgotPassword = asyncComponent(() => import('./ForgotPassword'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/auth/login' component={ AsyncLogin } />
    <Route path='/auth/signup' component={ AsyncSignup } />
    <Route path='/auth/forgot-password' component={ AsyncForgotPassword } />

    <Redirect to='/auth/signup' />
  </Switch>
)

export default routes
