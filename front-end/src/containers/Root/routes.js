import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import asyncComponent from '../../components/AsyncComponent'

const AsyncHome = asyncComponent(() => import('../Home'))
const AsyncAuthentication = asyncComponent(() => import('../Authentication'))
const AsyncMenu = asyncComponent(() => import('../Menus'))
const AsyncSelectMeals = asyncComponent(() => import('../SelectMeals'))
const AsyncContactUs = asyncComponent(() => import('../ContactUs'))
const AsyncCheckout = asyncComponent(() => import('../Checkout'))
const AsyncOrderConfirmation = asyncComponent(() => import('../OrderConfirmation'))
const AsyncSettings = asyncComponent(() => import('../Settings'))
const AsyncNotAvailable = asyncComponent(() => import('../NotAvailable'))
const AsyncHelpCenter = asyncComponent(() => import('../HelpCenter'))
const AsyncCareer = asyncComponent(() => import('../Career'))
const AsyncTermsOfService = asyncComponent(() => import('../TermsOfService'))
const AsyncGiftCards = asyncComponent(() => import('../GiftCards'))


/**
 * Routes
 */

const routes = (
  <Switch>
    <Route path='/home' component={ AsyncHome } />
    <Route path='/auth' component={  AsyncAuthentication } />
    <Route path='/menus' component={ AsyncMenu } />
    <Route path='/select-meals' component={ AsyncSelectMeals } />
    <Route path='/contact-us' component={ AsyncContactUs } />
    <Route path='/checkout' component={ AsyncCheckout } />
    <Route path='/order-confirm' component={ AsyncOrderConfirmation } />
    <Route path='/settings' component={ AsyncSettings } />
    <Route path='/help-center' component={ AsyncHelpCenter } />
    <Route path='/terms-of-service' component={ AsyncTermsOfService } />
    <Route path='/career' component={ AsyncCareer } />
    <Route path='/gift-cards' component={ AsyncGiftCards } />
    <Route path='/not-available' component={ AsyncNotAvailable } />

    <Redirect to='/home' />
  </Switch>
)

export default routes
