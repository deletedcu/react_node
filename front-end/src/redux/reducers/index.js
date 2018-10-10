import { combineReducers } from 'redux'

import user from './user'
import menuModal from './menuModal'

export default combineReducers({
  user,
  menuModal,
});
