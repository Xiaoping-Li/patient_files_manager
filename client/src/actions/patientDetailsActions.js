import axios from 'axios';
import { GET_PATIENT_DETAILS } from './types.js';

export const getPatientDetails = (id) => {

  const promise = axios.get(`http://localhost:5000/api/patients/${id}/records`);
  return {
    type: GET_PATIENT_DETAILS,
    payload: promise,
  };
};