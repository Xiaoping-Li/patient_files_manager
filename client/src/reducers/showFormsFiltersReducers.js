import { SET_FORM_FILTER } from '../actions/types';
import { ShowFormsFilters } from '../actions/showRecordsActions';

const showFormsFiltersReducer = (state = ShowFormsFilters.SHOW_NOTHING, action) => {
  switch (action.type) {
    case 'SET_FORM_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default showFormsFiltersReducer;