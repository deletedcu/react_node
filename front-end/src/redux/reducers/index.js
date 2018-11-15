import { combineReducers } from 'redux'

import user from './user'
import cart from './cart'
import menuModal from './menuModal'
import comboSliceModal from './comboSliceModal'
import overlaySpinner from './overSpinner'
import products from './products'
import sideBar from './sideBar'

export default combineReducers({
  user,
  products,
  cart,
  menuModal,
  comboSliceModal,
  overlaySpinner,
  sideBar,
});
