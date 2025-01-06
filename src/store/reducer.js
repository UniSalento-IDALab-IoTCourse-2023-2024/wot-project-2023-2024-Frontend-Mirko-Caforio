import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import auth from './auth';
import message from "./message";
import profile from "./profile";
import notification from "./notification";
import machine from "./machine";

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth,
  message,
  profile,
  notification,
  machine
});

export default reducer;
