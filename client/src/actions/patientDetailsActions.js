import axios from 'axios';
import { GET_PATIENT_DETAILS } from './types.js';

export const getPatientDetails = (id) => {

  const promise = axios.get(`http://192.168.0.106:5000/api/patients/${id}/forms`);
  return {
    type: GET_PATIENT_DETAILS,
    payload: promise,
  };
};