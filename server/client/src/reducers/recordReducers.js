import { 
  GET_RECORDS, 
  ADD_RECORD, 
  UPDATE_RECORD, 
  DELETE_RECORD,
} from '../actions/types';

const recordsReducer = (records = [], action) => {
  switch(action.type) {
    case GET_RECORDS:
      return action.payload.data;
    case ADD_RECORD:
      return records.concat(action.payload.data);
    case UPDATE_RECORD:
      const id = action.payload.data.id;
      const updated = action.payload.data;
      return records.map((record, index) => {
        if (record.id !== id) {
          return record;
        }
        return {
          ...record,
          ...updated,
        };
      });  
    case DELETE_RECORD:
      return records.filter(record => record.id !== action.id);
    default:
      return records;
  }
};

export default recordsReducer;