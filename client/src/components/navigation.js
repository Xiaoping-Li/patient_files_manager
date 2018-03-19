import React from 'react';
import { Link } from 'react-router-dom';
import Patients from './patients';
import Forms from './forms';
import '../styles/navBarStyle.css';

function Navigation() {
  return (
    <div className="navBar_style">
      <span  className="routerLink"><Link to='/'>Home</Link></span>
      <span  className="routerLink"><Link to='/patients'>Patients</Link></span>
      <span  className="routerLink"><Link to='/forms'>Forms</Link></span>   
    </div>
  );
}

export default Navigation;