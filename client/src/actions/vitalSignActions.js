import axios from 'axios';
import { GET_VITALSIGN } from './types.js';

export const getVitalSign = (id=1) => {
  const promise = axios.get(`http://localhost:5000/api/forms/${id}`);
  return {
    type: GET_VITALSIGN,
    payload: promise,
  };
};

