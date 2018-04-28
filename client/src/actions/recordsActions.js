import axios from 'axios';
import { GET_RECORDS, ADD_RECORD, UPDATE_RECORD, DELETE_RECORD } from './types.js';

export const getRecords = () => {
  const obj = {
    patientID: 1,
    formID: 1
  };
  // obj[key] = value; dynamic variables
  const promise = axios.get('/api/records/', {params: obj});
  return {
    type: GET_RECORDS,
    payload: promise,
  };
};

export const addRecord = (record) => {
  const promise = axios.post('/api/records', record);
  return {
    type: ADD_RECORD,
    payload: promise,
  };
};

export const updateRecord = (record) => {
  return dispatch => {
    axios
      .put(`/api/patients/${record.record_id}`, record)
      .then(response => {
        dispatch({
          type: UPDATE_RECORD,
          payload: response
        });  
      })
      .catch(() => {
        alert('Please update records with valid ids!');
      });
  }
};

export const deleteRecord = (id) => {
  const promise = axios.delete(`/api/records/${id}`);
  return {
    type: DELETE_RECORD,
    payload: promise,
    id,
  };
};
