import React, { Component } from 'react';
import PatientsList from './patientsList';
import PatientsForm from './patientsForm';



class Patients extends Component {
  render() {
    return (
      <div className="App"> 
        <PatientsForm />
        <PatientsList /> 
      </div>
    );
  }
}

export default Patients;