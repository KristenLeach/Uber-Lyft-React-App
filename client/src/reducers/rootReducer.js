import { combineReducers } from 'redux'
import confirmRouteReducer from './confirmRouteReducer';
import mapboxReducer from './mapboxReducer';
import resultsReducer from './resultsReducer';
import searchReducer from './searchReducer'


const rootReducer = combineReducers({
  mapboxReducer,
  searchReducer,
  confirmRouteReducer,
  resultsReducer
})

export default rootReducer