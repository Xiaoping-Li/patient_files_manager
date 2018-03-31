import { GET_FORM_DETAILS } from '../actions/types';

const formDetailsReducer = (formDetails = {}, action) => {
  switch (action.type) {
    case GET_FORM_DETAILS:
      return action.payload.data;
    default:
      return formDetails;
  }
};

export default formDetailsReducer;