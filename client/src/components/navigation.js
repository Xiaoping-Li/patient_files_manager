import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navBarStyle.css';

function Navigation() {
  return (
    <div className="navBar_style">
      <span  className="routerLink"><Link to='/'>Home</Link></span>
      <span  className="routerLink"><Link to='/patients'>Patients</Link></span>   
    </div>
  );
}

export default Navigation;