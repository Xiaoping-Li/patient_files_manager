import axios from 'axios';
import { GET_FORMS } from './types.js';

export const getForms = () => {

  const promise = axios.get('http://localhost:5000/api/forms');
  return {
    type: GET_FORMS,
    payload: promise,
  };
};