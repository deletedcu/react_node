import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))
const AsyncAuthentication = asyncComponent(() => import('../Authentication'))
const AsyncMenu = asyncComponent(() => import('../Menus'))
const AsyncSelectMeals = asyncComponent(() => import('../SelectMeals'))
// const AsyncMealPlans = asyncComponent(() => import('../MealPlans'))
const AsyncContactUs = asyncComponent(() => import('../ContactUs'))
const AsyncCheckout = asyncComponent(() => import('../Checkout'))
const AsyncSettings = asyncComponent(() => import('../Settings'))

/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/home' component={ AsyncHome } />
    <Route path='/auth' component={  AsyncAuthentication } />
    <Route path='/menus' component={ AsyncMenu } />
    <Route path='/select-meals' component={ AsyncSelectMeals } />
    {/* <Route path='/meal-plans' component={ AsyncMealPlans } /> */}
    <Route path='/contact-us' component={ AsyncContactUs } />
    <Route path='/checkout' component={ AsyncCheckout } />
    <Route path='/settings' component={ AsyncSettings } />

    <Redirect to='/home' />
  </Switch>
)

export default routes
