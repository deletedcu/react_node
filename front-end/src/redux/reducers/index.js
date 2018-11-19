import { combineReducers } from 'redux'

import modal from './modal'
import user from './user'
import cart from './cart'
import products from './products'
import sideBar from './sideBar'
import overlaySpinner from './overSpinner'

export default combineReducers({
  modal,
  user,
  products,
  cart,
  overlaySpinner,
  sideBar,
});
