import { combineReducers } from 'redux'

import user from './user'
import cart from './cart'
import menuModal from './menuModal'

export default combineReducers({
  user,
  cart,
  menuModal,
});
