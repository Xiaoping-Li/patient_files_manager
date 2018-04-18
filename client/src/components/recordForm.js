import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecord, updateRecord } from '../actions';
import '../styles/formStyle.css';


class RecordForm extends Component {
  constructor() {
    super();

    this.state = {
      record_id: undefined,
      record_value: '',
      patientID: undefined,
      fieldID: undefined,
    };
  }

  handleRecordIDChange = (e) => {
    this.setState({
      record_id: e.target.value
    });
  };

  handleValueChange = (e) => {
    this.setState({
      record_value: e.target.value
    });
  };

  handlePatientIDChange = (e) => {
    this.setState({
      patientID: e.target.value
    });
  };

  handleFieldIDChange = (e) => {
    this.setState({
      fieldID: e.target.value
    });
  };

  saveRecord = (e) => {
    e.preventDefault();
    const record = {
      record_id: this.state.record_id,
      record_value: this.state.value,
      patientID: this.state.patientID,
      fieldID: this.state.fieldID,   
    };

    if (this.state.record_id === undefined || 0 || !this.state.record_id) {
      this.props.addRecord(record);
    } else {
      this.props.updateRecord(record);
    }
    
    
   
    this.setState({
      record_id: undefined,
      record_value: '',
      patientID: undefined,
      fieldID: undefined,
    });
  };

  render() {
    return (
      <div className="form_style">
        <div className="propertyForm">
          Record value:
          <input type="text" value={this.state.record_value} onChange={this.handleValueChange} />
        </div>
        <button className="formButton" onClick={this.saveRecord}>save</button> 
      </div>
    )
  }
}

export default connect(null, { addRecord, updateRecord })(RecordForm);