import { combineReducers } from 'redux'

import videoReducer from './videoReducer'
import selectedReducer from './selectedReducer'
import navReducer from './navReducer'

export default combineReducers({
  videos: videoReducer,
  selected: selectedReducer,
  nav: navReducer,
})
