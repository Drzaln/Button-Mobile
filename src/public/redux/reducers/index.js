import { combineReducers } from 'redux'

import user from './user'
import score from "./score";
import pattern from "./pattern";

const appReducer = combineReducers({
  user,
  score,
  pattern
})

export default appReducer
