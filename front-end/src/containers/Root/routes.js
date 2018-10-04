import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))
const AsyncMenu = asyncComponent(() => import('../Menus'))
const AsyncMealPlans = asyncComponent(() => import('../MealPlans'))
const AsyncContactUs = asyncComponent(() => import('../ContactUs'))
const AsyncCheckout = asyncComponent(() => import('../Checkout'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/home' component={ AsyncHome } />
    <Route path='/menus' component={ AsyncMenu } />
    <Route path='/meal-plans' component={ AsyncMealPlans } />
    <Route path='/contact-us' component={ AsyncContactUs } />
    <Route path='/checkout' component={ AsyncCheckout } />

    <Redirect to='/home' />
  </Switch>
)

export default routes
