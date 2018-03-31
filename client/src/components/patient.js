import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/listStyle.css';


const Patient = ({ patient, onDelete })  => {
  return(
      <Link className="list_items" to={`/patients/${patient.pt_id}/records`}>
        <span>{patient.pt_id}</span>
        <span>{patient.firstname}</span>
        <span>{patient.lastname}</span>  
        <button onClick={() => onDelete(patient.pt_id)}>X</button>   
      </Link>  
  );  
};

export default Patient;