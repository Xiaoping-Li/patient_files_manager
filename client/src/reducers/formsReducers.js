import { GET_FORMS } from '../actions/types';

const formsReducer = (forms = [], action) => {
  switch (action.type) {
    case GET_FORMS:
      return action.payload.data;
    default:
      return forms;
  }
};

export default formsReducer;