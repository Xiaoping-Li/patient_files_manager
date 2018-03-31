import { combineReducers } from 'redux';
import patientsReducer from './patientsReducers.js';
import recordsReducer from './recordReducers.js';
import vitalSignReducer from './vitalSignReducers.js';
import patientDetailsReducer from './patientDetailsReducers.js';
import formsReducer from './formsReducers.js';
import formDetailsReducer from './formDetailsReducers.js';


const rootReducer = combineReducers({
  patients: patientsReducer,
  records: recordsReducer,
  vitalSign: vitalSignReducer,
  patientDetails: patientDetailsReducer,
  forms: formsReducer,
  formDetails: formDetailsReducer,
});

export default rootReducer;