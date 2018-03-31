import axios from 'axios';
import { GET_FORM_DETAILS } from './types.js';

export const getFormDetails = (id) => {

  const promise = axios.get(`http://192.168.0.106:5000/api/forms/${id}`);
  return {
    type: GET_FORM_DETAILS,
    payload: promise,
  };
};
