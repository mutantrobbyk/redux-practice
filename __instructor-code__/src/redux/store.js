import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    reducer,
    userReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));