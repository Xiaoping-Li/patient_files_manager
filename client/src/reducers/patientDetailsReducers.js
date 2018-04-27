import { GET_PATIENT_DETAILS } from '../actions/types';

const patientDetailsReducer = (patientDetails = null, action) => {
  switch (action.type) {
    case GET_PATIENT_DETAILS:
      return action.payload.data;
    default:
      return patientDetails;
  }
};

export default patientDetailsReducer;