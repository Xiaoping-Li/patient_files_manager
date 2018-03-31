import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPatientDetails } from '../actions';
import FormDetails from './formDetails.js';
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

    const ids = Array.from({length: 3}, (v, i) => i + 1);

    return(
    <div>
      <div className="form_style">
        <div className="propertyForm">Patient ID: {this.props.patientDetails[0].pt_id}</div>
        <div className="propertyForm">First Name: {this.props.patientDetails[0].firstname}</div>
        <div className="propertyForm">Last Name: {this.props.patientDetails[0].lastname}</div>
        <div className="propertyForm">DOB: {this.props.patientDetails[0].DOB}</div>
        <div className="propertyForm">Gender: {this.props.patientDetails[0].gender}</div>
      </div>
      <ul>
        {ids.map(id => {
          return <FormDetails key={id} id={id} />;
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