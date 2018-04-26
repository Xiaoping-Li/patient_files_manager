import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getPatientDetails } from '../actions';
import { getForms } from '../actions';
import { addRecord } from '../actions';
import DropDownSelect from './dropDownSelect';
import Record from './record';
import '../styles/listStyle.css';


class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        id: null,
        name: '',
        fields: []
      },

      records: []
    };
  }

  componentDidMount() {
    this.props.getForms();
    
  }

  componentDidUpdate() {
    this.props.getPatientDetails(this.props.patientID);
    //console.log('patientRecords');
  }

  handleFormChange = e => {
    const selectedID = parseInt(e.target.value, 10);
    const emptyForm = {
      id: null,
      name: '',
      fields: []
    };
    const selectedForm = this.props.forms.find(form => form.id === selectedID) || emptyForm;

    const records = selectedForm.fields.map(field => {
      const patientRecords = this.props.patientDetails.records;
      //console.log(patientRecords);
      let existingRecord = patientRecords.find(ptRecord => ptRecord.fieldID === field.field_id );
      
      const record = {
          fieldName: field.field_name,
          fieldID: field.field_id,
          patientID: this.props.patientID,
          record_value: existingRecord ? existingRecord.record_value : '',
        };
      // console.log(record);
      return record;  
    });

    this.setState({
      form: selectedForm,
      records: records
    });
  }

  updateRecord = (fieldID, value) => {
    const newRecords = this.state.records.map(record => {
      if (record.fieldID === fieldID) record.record_value = value;
      return record;
    });
    this.setState({records: newRecords});  
  }

  addRecords = e => {
    this.state.records.map(record => {
      e.preventDefault();
      this.props.addRecord(record);
    });
    this.setState({records: []});
  }

  render() {
    return(
      <div>
        <div>
          <label htmlFor="dropDownSelect">Select a Form</label>
          <Field
            name="dromDownSelect"
            label="dropDownSelect"
            component={DropDownSelect}
            forms={this.props.forms}
            onChange={this.handleFormChange.bind(this)}
          />  
        </div>
        <button onClick={this.addRecords}>Add</button>
        <div className="form_style">
          {this.state.form.name}
          <ul>
            {this.state.records.map(record => {
              return(
                <li key={record.fieldID}><Record  record={record} updateRecord={this.updateRecord}/></li>
              );
            })}
          </ul> 
        </div>  
      </div>
    );
  }
}

Forms = reduxForm({
  form: 'dropDownSelect'
})(Forms);

const mapStateToProps = (state) => {
  return {
    forms: state.forms,
    records: state.records,
    patientDetails: state.patientDetails,
  };
};

export default connect(mapStateToProps, { getForms, addRecord, getPatientDetails })(Forms);