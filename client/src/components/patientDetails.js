import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPatientDetails } from '../actions';
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
        <div className="propertyForm">Patient ID: {this.props.patientDetails[0].id}</div>
        <div className="propertyForm">First Name: {this.props.patientDetails[0].firstname}</div>
        <div className="propertyForm">Last Name: {this.props.patientDetails[0].lastname}</div>
        <div className="propertyForm">DOB: {this.props.patientDetails[0].DOB}</div>
        <div className="propertyForm">Gender: {this.props.patientDetails[0].gender}</div>
      </div>
      <ul>
        {this.props.patientDetails.map((detail, i) => {
          return (
            <li className="list_items" key={i}>
            <span>Temperature: {detail.temperature}</span>
            <span>Heart Rate: {detail.heart_rate}</span>
            <span>Systolic: {detail.systolic}</span>
            <span>Diastolic: {detail.diastolic}</span>
            <span>Test Date: {detail.test_date}</span> 
          </li>
          ); 
        })}
      </ul>
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