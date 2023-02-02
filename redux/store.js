import { createStore, combineReducers } from 'redux'
import {
  flightInformationReducer,
  userInformationReducer,
  flightsReducer
} from './reducer'

const rootReducer = combineReducers({
  flightInfo: flightInformationReducer,
  userInformation: userInformationReducer,
  flightsList: flightsReducer
})

const store = createStore(rootReducer)
export default store
