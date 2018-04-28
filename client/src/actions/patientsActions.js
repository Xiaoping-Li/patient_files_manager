import axios from 'axios';
import { GET_PATIENTS, ADD_PATIENT, UPDATE_PATIENT, DELETE_PATIENT } from './types.js';

export const getPatients = () => {
  const promise = axios.get('/api/patients');
  return {
    type: GET_PATIENTS,
    payload: promise,
  };
};

export const addPatient = (patient) => {
  const promise = axios.post('/api/patients', patient);
  return {
    type: ADD_PATIENT,
    payload: promise,
  };
};

export const updatePatient = (patient) => {
  return dispatch => {
    axios
      .put(`/api/patients/${patient.id}`, patient)
      .then(response => {
        dispatch({
          type: UPDATE_PATIENT,
          payload: response
        });  
      })
      .catch(() => {
        alert('Please update patients with valid ids!');
      });
  }
};

export const deletePatient = (id) => {
  const promise = axios.delete(`/api/patients/${id}`);
  return {
    type: DELETE_PATIENT,
    payload: promise,
    id,
  };
};
