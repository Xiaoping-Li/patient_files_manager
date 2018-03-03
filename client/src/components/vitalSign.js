import React, { Component } from 'react';
import '../styles/listStyle.css';

const VitalSign = ({ vitalSign, onDelete })  => {

  return(
    <li className="list_items">
      <span>Form ID: {vitalSign.id}</span>
      <span>Temp:{vitalSign.temperature}</span>
      <span>HR: {vitalSign.heart_rate}</span>
      <span>Systolic: {vitalSign.systolic}</span>
      <span>Diastolic: {vitalSign.diastolic}</span>
      <span>Date: {vitalSign.test_date}</span> 
      <button onClick={() => onDelete(vitalSign.id)}>X</button>
    </li>
  );
   
};

export default VitalSign;