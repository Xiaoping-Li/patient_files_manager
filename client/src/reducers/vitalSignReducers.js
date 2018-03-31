import { GET_VITALSIGN } from '../actions/types';

const vitalSignReducer = (vitalSign = {}, action) => {
  switch(action.type) {
    case GET_VITALSIGN:
      return action.payload.data;
    default:
      return vitalSign;
  }
};

export default vitalSignReducer;