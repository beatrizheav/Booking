import { createStore, combineReducers } from 'redux'
import { flightInformationReducer,userInformationReducer } from './reducer'

const rootReducer = combineReducers({ flightInfo: flightInformationReducer, userInformation: userInformationReducer })

const store = createStore(rootReducer)
export default store
