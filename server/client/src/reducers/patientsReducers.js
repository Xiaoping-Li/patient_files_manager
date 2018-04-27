import { 
  GET_PATIENTS, 
  ADD_PATIENT, 
  UPDATE_PATIENT, 
  DELETE_PATIENT,
} from '../actions/types';

const patientsReducer = (patients = [], action) => {
  switch(action.type) {
    case GET_PATIENTS:
      return action.payload.data;
    case ADD_PATIENT:
      return patients.concat(action.payload.data);
    case UPDATE_PATIENT:
      const id = action.payload.data.id;
      const updated = action.payload.data;
      return patients.map((patient, index) => {
        if (patient.id !== id) {
          return patient;
        }
        return {
          ...patient,
          ...updated,
        };
      });  
    case DELETE_PATIENT:
      return patients.filter(patient => patient.id !== action.id);
    default:
      return patients;
  }
};

export default patientsReducer;