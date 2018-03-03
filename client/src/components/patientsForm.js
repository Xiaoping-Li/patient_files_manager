import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPatient, updatePatient } from '../actions';
import '../styles/formStyle.css';


class PatientsForm extends Component {
  constructor() {
    super();

    this.state = {
      id: undefined,
      firstname: '',
      lastname: '',
      DOB: '',
      gender: '',  
    };
  }

  handleIDChange = (e) => {
    this.setState({
      id: e.target.value
    });
  };

  handleFirstnameChange = (e) => {
    this.setState({
      firstname: e.target.value
    });
  };

  handleLastnameChange = (e) => {
    this.setState({
      lastname: e.target.value
    });
  };

  handleDOBChange = (e) => {
    this.setState({
      DOB: e.target.value
    });
  };

  handleGenderChange = (e) => {
    this.setState({
      gender: e.target.value
    });
  };

  savePatient = (e) => {
    e.preventDefault();
    const patient = {
      id: this.state.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      DOB: this.state.DOB,
      gender: this.state.gender    
    };
    if (this.state.id === undefined || 0 || !this.state.id) {
      this.props.addPatient(patient);
    } else {
      this.props.updatePatient(patient);
    }
  
    this.setState({
      id: undefined,
      firstname: '',
      lastname: '',
      DOB: '',
      gender: ''
    });
  };

  render() {
    return (
      <div className="form_style">
        <div className="propertyForm">
          Patient ID:
          <input type="number" value={this.state.id || 0 } onChange={this.handleIDChange} />
        </div>
        <div className="propertyForm">
          First Name:
          <input type="text" value={this.state.firstname} onChange={this.handleFirstnameChange} />
        </div>
        <div className="propertyForm">
          Last Name:
          <input type="text" value={this.state.lastname} onChange={this.handleLastnameChange} />
        </div>
        <div className="propertyForm">
          DOB:
          <input type="date" value={this.state.DOB} onChange={this.handleDOBChange} />
        </div>
        <div className="propertyForm">
          Gender:
          <form onChange={this.handleGenderChange.bind(this)}>
            <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} /> Male
            <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} /> Female
            <input type="radio" name="gender" value="Other" checked={this.state.gender === "Other"} /> Other
          </form>
        </div> 
        <button className="formButton" onClick={this.savePatient}>save</button> 
      </div>
    )
  }
}

export default connect(null, { addPatient, updatePatient })(PatientsForm);