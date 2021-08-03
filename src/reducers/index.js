import { combineReducers } from 'redux'

import videoReducer from './videoReducer'
import selectedReducer from './selectedReducer'

export default combineReducers({
  videos: videoReducer,
  selected: selectedReducer,
})
