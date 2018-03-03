import { 
  GET_VITALSIGNS, 
  ADD_VITALSIGN, 
  UPDATE_VITALSIGN, 
  DELETE_VITALSIGN,
} from '../actions/types';

const vitalSignsReducer = (vitalSigns = [], action) => {
  switch(action.type) {
    case GET_VITALSIGNS:
      return action.payload.data;
    case ADD_VITALSIGN:
      return vitalSigns.concat(action.payload.data);
    case UPDATE_VITALSIGN:
      const id = action.payload.data.id;
      const updated = action.payload.data;
      return vitalSigns.map((vitalSign, index) => {
        if (vitalSign.id !== id) {
          return vitalSign;
        }
        return {
          ...vitalSign,
          ...updated,
        };
      });  
    case DELETE_VITALSIGN:
      return vitalSigns.filter(vitalSign => vitalSign.id !== action.id);
    default:
      return vitalSigns;
  }
};

export default vitalSignsReducer;