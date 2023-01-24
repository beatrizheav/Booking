import {createStore, combineReducers} from 'redux';
import { flightInformationReducer } from './reducer';

const rootReducer = combineReducers({flightInfo:flightInformationReducer})

const store = createStore(rootReducer);
export default store
