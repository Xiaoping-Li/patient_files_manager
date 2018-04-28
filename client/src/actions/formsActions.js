import axios from 'axios';
import { GET_FORMS } from './types.js';

export const getForms = () => {

  const promise = axios.get('/api/forms');
  return {
    type: GET_FORMS,
    payload: promise,
  };
};