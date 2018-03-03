import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/listStyle.css';


const Patient = ({ patient, onDelete })  => {

  return(
      <Link className="list_items" to={`/patients/${patient.id}/forms`}>
        <span>{patient.id}</span>
        <span>{patient.firstname}</span>
        <span>{patient.lastname}</span>  
        <button onClick={() => onDelete(patient.id)}>X</button>   
      </Link>  
  );  
};

export default Patient;