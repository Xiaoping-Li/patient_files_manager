import axios from 'axios';
import { GET_FORMS } from './types.js';

export const getForms = () => {

  const promise = axios.get('http://192.168.0.106:5000/api/forms');
  return {
    type: GET_FORMS,
    payload: promise,
  };
};