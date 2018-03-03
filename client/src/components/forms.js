import React, { Component } from 'react';
import VitalSignForm from './vitalSignForm';
import VitalSignsList from './vitalSignsList';



class Forms extends Component {
  render() {
    return (
      <div className="App">
        <VitalSignForm />
        <VitalSignsList />
      </div>
    );
  }
}

export default Forms;