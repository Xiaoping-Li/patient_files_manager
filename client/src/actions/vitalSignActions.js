import axios from 'axios';
import { GET_VITALSIGNS, ADD_VITALSIGN, UPDATE_VITALSIGN, DELETE_VITALSIGN } from './types.js';

export const getVitalSigns = () => {
  const promise = axios.get('http://localhost:5000/api/forms');
  return {
    type: GET_VITALSIGNS,
    payload: promise,
  };
};

export const addVitalSign = (vitalSign) => {
  const promise = axios.post('http://localhost:5000/api/forms', vitalSign);
  return {
    type: ADD_VITALSIGN,
    payload: promise,
  };
};

export const updateVitalSign = (vitalSign) => {
  return dispatch => {
    axios
      .put(`http://localhost:5000/api/forms/${vitalSign.id}`, vitalSign)
      .then(response => {
        dispatch({
          type: UPDATE_VITALSIGN,
          payload: response
        });  
      })
      .catch(() => {
        alert('Please update VitalSign Forms with valid ids!');
      });
  }
};

export const deleteVitalSign = (id) => {
  const promise = axios.delete(`http://localhost:5000/api/forms/${id}`);
  return {
    type: DELETE_VITALSIGN,
    payload: promise,
    id,
  };
};
