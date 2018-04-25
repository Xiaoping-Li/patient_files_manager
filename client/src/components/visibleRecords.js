import { connect } from 'react-redux';
import { ShowFormsFilters } from '../actions/showRecordsActions';
import RecordsList from './recordsList';

import '../styles/formStyle.css';

const getVisibleRecords = (records, filter) => {
  switch (filter) {
    case ShowFormsFilters.SHOW_DISCHARGE_FORM:
      const dischargeFieldIDs = [9, 10, 11];
      return records.filter(record => dischargeFieldIDs.includes(record.fieldID));
    case ShowFormsFilters.SHOW_PROCEDURE_FORM:
      const procedureFieldIDs = [6, 7, 8];
      return records.filter(record => procedureFieldIDs.includes(record.fieldID));
    case ShowFormsFilters.SHOW_VITAL_SIGN_FORM:
      const vitalSignFieldIDs = [1, 3, 4, 5];
      return records.filter(record => vitalSignFieldIDs.includes(record.fieldID));
    case ShowFormsFilters.SHOW_NOTHING:
      return [];
  }
}

const mapStateToProps = state => ({
  filteredRecords: getVisibleRecords(state.patientDetails.records, state.showFormsFilters)
})

export default connect(mapStateToProps)(RecordsList);

