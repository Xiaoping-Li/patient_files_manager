import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPatients, deletePatient } from '../actions';
import Patient from './patient.js';
import '../styles/listStyle.css';

class PatientsList extends Component {
  componentDidMount() {
    this.props.getPatients();
  }

  render() {
    return(
      <ul>
        {this.props.patients.map(patient => {
          return (
            <li><Patient key={patient.id} patient={patient} onDelete={this.props.deletePatient}/></li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    patients: state.patients
  };
};

export default connect(mapStateToProps, { getPatients, deletePatient })(PatientsList);
