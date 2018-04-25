import React, { Component } from 'react';
import Record from './record';

import '../styles/formStyle.css';


const RecordForm = ({ patientID, form }) => {
  console.log(patientID, form); 
  return (
    <div className="form_style">
      {patientID}
      {form.name}
      <ul>
        {form.fields.map(field => {
          return(
            <li key={field.field_id}><Record patientID={patientID} field={field} /></li>
          );
        })}
      </ul>
    </div>
  )
}

export default RecordForm;