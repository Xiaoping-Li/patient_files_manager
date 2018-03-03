import { combineReducers } from 'redux';
import patientsReducer from './patientsReducers.js';
import vitalSignsReducer from './vitalSignsReducers.js';
import patientDetailsReducer from './patientDetailsReducers.js';


const rootReducer = combineReducers({
  patients: patientsReducer,
  vitalSigns: vitalSignsReducer,
  patientDetails: patientDetailsReducer,
});

export default rootReducer;