import { combineReducers } from 'redux';
import patientsReducer from './patientsReducers.js';
import recordsReducer from './recordReducers.js';
import patientDetailsReducer from './patientDetailsReducers.js';
import formsReducer from './formsReducers.js';


const rootReducer = combineReducers({
  patients: patientsReducer,
  records: recordsReducer,
  patientDetails: patientDetailsReducer,
  forms: formsReducer,
});

export default rootReducer;