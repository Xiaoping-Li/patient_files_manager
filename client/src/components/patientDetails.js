import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPatientDetails } from '../actions';
import Forms from './forms.js';
import '../styles/formStyle.css';
import '../styles/listStyle.css';



class PatientDetails extends Component {
  componentDidMount() {
    this.props.getPatientDetails(this.props.match.params.id);
  }
  
  render() {
    if (this.props.patientDetails === null) {
      return null;
    } 

    return(
    <div>
      <div className="form_style">
        <div className="propertyForm">Patient ID: {this.props.patientDetails.id}</div>
        <div className="propertyForm">First Name: {this.props.patientDetails.firstName}</div>
        <div className="propertyForm">Last Name: {this.props.patientDetails.lastName}</div>
        <div className="propertyForm">DOB: {this.props.patientDetails.DOB}</div>
        <div className="propertyForm">Gender: {this.props.patientDetails.gender}</div>
      </div>
       
      <Forms patientID={this.props.patientDetails.id}/> 
    </div>
    );
  }   
};

const mapStateToProps = (state) => {
  return {
    patientDetails: state.patientDetails,
  }
};

export default connect(mapStateToProps, { getPatientDetails })(PatientDetails);