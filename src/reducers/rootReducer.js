import complaintReducer from './complaintReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  complaints: complaintReducer,
})

export default rootReducer
