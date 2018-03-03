import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addVitalSign, updateVitalSign } from '../actions';
import '../styles/formStyle.css';



class VitalSignForm extends Component {
  constructor() {
    super();

    this.state = {
      id: undefined,
      temperature: undefined,
      heart_rate: undefined,
      systolic: undefined,
      diastolic: undefined,
      test_date: '',
      patientID: undefined,
    };
  }

  handleIDChange = (e) => {
    this.setState({
      id: e.target.value
    });
  };

  handleTemperatureChange = (e) => {
    this.setState({
      temperature: e.target.value
    });
  };

  handleHeartRateChange = (e) => {
    this.setState({
      heart_rate: e.target.value
    });
  };

  handleSystolicChange = (e) => {
    this.setState({
      systolic: e.target.value
    });
  };

  handleDiastolicChange = (e) => {
    this.setState({
      diastolic: e.target.value
    });
  };

  handleTestDateChange = (e) => {
    this.setState({
      test_date: e.target.value
    });
  };

  handlePatientIDChange = (e) => {
    this.setState({
      patientID: e.target.value
    });
  };

  saveVitalSign = (e) => {
    e.preventDefault();
    const vitalSign = {
      id: this.state.id,
      temperature: this.state.temperature,
      heart_rate: this.state.heart_rate,
      systolic: this.state.systolic,
      diastolic: this.state.diastolic,
      test_date: this.state.test_date,
      patientID: this.state.patientID,   
    };
    if (this.state.id === undefined || 0 || !this.state.id) {
      this.props.addVitalSign(vitalSign);
    } else {
      this.props.updateVitalSign(vitalSign);
    }
  
    this.setState({
      id: undefined,
      temperature: undefined,
      heart_rate: undefined,
      systolic: undefined,
      diastolic: undefined,
      test_date: '',
      patientID: undefined,
    });
  };



  render() {
    return (
      <div className="form_style">
        <div className="propertyForm">
          Form ID:
          <input type="number" value={this.state.id || 0 } onChange={this.handleIDChange} />
        </div>
        <div className="propertyForm">
          Temperature:
          <input type="number" value={this.state.temperature || 0 } onChange={this.handleTemperatureChange} />
        </div>
        <div className="propertyForm">
          Heart Rate:
          <input type="number" value={this.state.heart_rate || 0 } onChange={this.handleHeartRateChange} />
        </div>
        <div className="propertyForm">
          Systolic:
          <input type="number" value={this.state.systolic || 0 } onChange={this.handleSystolicChange} />
        </div>
        <div className="propertyForm">
          Diastolic:
          <input type="number" value={this.state.diastolic || 0 } onChange={this.handleDiastolicChange} />
        </div>
        <div className="propertyForm">
          Test Date:
          <input type="date" value={this.state.test_date } onChange={this.handleTestDateChange} />
        </div>
        <div className="propertyForm">
          Patient ID:
          <input type="number" value={this.state.patientID || 0 } onChange={this.handlePatientIDChange} />
        </div>
        <button className="formButton" onClick={this.saveVitalSign}>save</button>
      </div>
    );
  }
}

export default connect(null, { addVitalSign, updateVitalSign })(VitalSignForm);