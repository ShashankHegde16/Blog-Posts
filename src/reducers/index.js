import { combineReducers } from 'redux'
import postReducer from './postreducer';
import userReducer from './userreducer';


export default combineReducers({ posts: postReducer, user: userReducer });